import "./index.css";

import { useEffect, useState } from "react";

import { BankCard } from "./components/BankCard/BankCard";

export const App = () => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const balance = localStorage.getItem("balance");
    if (balance) {
      setBalance(parseFloat(balance));
    }
  }, []);

  const addToBalance = () => {
    const newBalance = balance + 100;
    setBalance(newBalance);
    localStorage.setItem("balance", newBalance.toString());
  };

  return (
    <>
      <BankCard balance={balance} addToBalance={addToBalance} />
    </>
  );
};
