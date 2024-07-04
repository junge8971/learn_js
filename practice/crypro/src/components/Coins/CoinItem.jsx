import classes from "./Coins.module.css";

export const CoinItem = ({ coin }) => {
  return (
    <div className={classes.coin_item}>
      <div>{coin.name}</div>
      <div>{coin.price}</div>
    </div>
  );
};
