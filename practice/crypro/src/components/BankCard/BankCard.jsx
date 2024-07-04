import { Button } from "../UI/buttons/Button";
import classes from "./BankCard.module.css";

export const BankCard = ({ balance, addToBalance, ...props }) => {
  console.log("rendered bank card");
  return (
    <div className={classes.bank_card}>
      <h2>Card name</h2>
      <Button onClick={addToBalance}>Стать богаче на 100 валюты</Button>
      <div className={classes.balance}>
        <span>Баланс: {balance}</span>
      </div>
    </div>
  );
};
