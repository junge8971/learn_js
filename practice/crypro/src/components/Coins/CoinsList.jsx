import { CoinItem } from "./CoinItem";
import classes from "./Coins.module.css";

export const CoinsList = ({ coins, isCoinsLoading, errorOnCoinsFetching }) => {
  return (
    <div className={classes.coin_list}>
      {isCoinsLoading ? (
        <p>Loading...</p>
      ) : errorOnCoinsFetching ? (
        <p>Error fetching coins!</p>
      ) : (
        coins.filteredCoins.map((coin) => {
          return <CoinItem key={coin.uuid} coin={coin} />;
        })
      )}
    </div>
  );
};
