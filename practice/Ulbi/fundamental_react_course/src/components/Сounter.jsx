import React, { useState } from "react";

//навание компонента должно соответсвовать названию файла и всегда с большой буква
// компонентом может быть любая функция возвращающая jsx

const Counter = () => {
  // Чтобы счётчик менялся при нажатии на копки нужно соопщить реакту, что состояние компонента изменилось и reactdom перерисовал компонент
  let [count, set_count] = useState(1);

  function increment() {
    // чтобы изменить значение переменной и перерисовать компонент нуно использовать функцию из state
    set_count(++count);
  }
  function decrement() {
    set_count(--count);
  }
  // Написание разметки html внутри js называется jsx
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Инкримент</button>
      <button onClick={decrement}>Декримент</button>
    </div>
  );
};

export default Counter;
