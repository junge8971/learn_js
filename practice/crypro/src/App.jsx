import React from "react";
import BankCard from "./components/BankCard/BankCard";

import "./index.css";
import { useState } from "react";
import { useEffect } from "react";

export default function App() {
  const [current_balance, set_balance] = useState(0);

  useEffect(() => {
    const balance = localStorage.getItem("balance");
    if (balance) {
      set_balance(parseFloat(balance));
    }
  }, []);

  const add_to_balance = () => {
    const new_balance = current_balance + 100;
    set_balance(new_balance);
    localStorage.setItem("balance", new_balance.toString());
  };
  return (
    <>
      <BankCard current_balance={current_balance} set_balance={add_to_balance} />
    </>
  );
}
