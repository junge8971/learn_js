import React from "react";

// В классовых компонентах нужно реализовать функцию reander, которая возвращает jsx
export default class ClassCounter extends React.Component {
  // создание состояния проходит в конструкторе
  constructor(props) {
    super(props);

    // В классе уже зарезервировао поле состояния. В него запишем объект
    this.state = {
      count: 0,
    };

    // внутри функицй формируется свой контекст и чтобы иметь там контекст класса его надо явно указать
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  increment() {
    // Для изменения состояния нужно вызвать метод setState, которая принимает объект с новыми значениями состояния.
    // Метод уже реализован в родительском класса
    this.setState({
      count: this.state.count + 1,
    });
  }
  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>Инкримент</button>
        <button onClick={this.decrement}>Декримент</button>
      </div>
    );
  }
}
