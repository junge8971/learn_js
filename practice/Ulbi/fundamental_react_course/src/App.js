import React, { useState } from "react";

export default function App() {
  // Написание разметки html внутри js называется jsx

  // Чтобы счётчик менялся при нажатии на копки нужно соопщить реакту, что состояние компонента изменилось и reactdom перерисовал компонент
  let [counter, set_counter] = useState(0);

  function increment() {
    // чтобы изменить значение переменной и перерисовать компонент нуно использовать функцию из state
    set_counter(++counter);
  }
  function decrement() {
    set_counter(--counter);
  }
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={increment}>Инкримент</button>
      <button onClick={decrement}>Декримент</button>
    </div>
  );
}
