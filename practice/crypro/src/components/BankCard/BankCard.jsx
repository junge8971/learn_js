import React from "react";
import classes from "./BankCard.module.css";
import Button from "../UI/buttons/Button";

export default function BankCard({ current_balance, set_balance }) {
  return (
    <div className={classes.bank_card}>
      <h2>Card name</h2>
      <Button callback={set_balance}>Стать богаче на 100 валюты</Button>
      <div className={classes.balance}>
        <span>Баланс: {current_balance}</span>
      </div>
    </div>
  );
}
