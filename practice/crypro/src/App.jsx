import "./index.css";

import { useEffect, useState } from "react";

import { getAllCoinsFromAPI } from "./API/Coinranking.js";
import { BankCard } from "./components/BankCard/BankCard";
import { CoinsList } from "./components/Coins/CoinsList";
import { SearchFrom } from "./components/Search/SearchForm.jsx";
import { useFetch } from "./hooks/useFetch";

export const App = () => {
  const [balance, setBalance] = useState(0);
  const [coins, setCoins] = useState({
    coins: [],
    filteredCoins: [],
  });
  const [fetchCoins, isCoinsLoading, errorOnCoinsFetching] = useFetch(
    async () => {
      const fetchedCoins = await getAllCoinsFromAPI();
      setCoins({ coins: fetchedCoins, filteredCoins: fetchedCoins });
    }
  );

  useEffect(() => {
    const balance = localStorage.getItem("balance");
    if (balance) {
      setBalance(parseFloat(balance));
    }
  }, []);

  useEffect(() => {
    fetchCoins();
  }, []);

  const filterCoins = (value) => {
    if (!value) {
      setCoins({ coins: coins.coins, filteredCoins: coins.coins });
    }
    setCoins({
      coins: coins.coins,
      filteredCoins: coins.coins.filter((coin) =>
        coin.name.toLowerCase().includes(value.toLowerCase())
      ),
    });
  };

  const addToBalance = () => {
    const newBalance = balance + 100;
    setBalance(newBalance);
    localStorage.setItem("balance", newBalance.toString());
  };

  return (
    <>
      <BankCard balance={balance} addToBalance={addToBalance} />
      <SearchFrom filterCallback={filterCoins} />
      <CoinsList
        coins={coins}
        isCoinsLoading={isCoinsLoading}
        errorOnCoinsFetching={errorOnCoinsFetching}
      />
    </>
  );
};
