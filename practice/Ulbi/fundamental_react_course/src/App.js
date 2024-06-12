import React from "react";
import Counter from "./components/Сounter";
import ClassCounter from "./components/ClassCounter";
import Post from "./components/Post";

// Стили
import "./styles/app.css";

export default function App() {
  let [posts, set_posts] = React.useState([
    { id: 2, title: "Стартуем 2", body: "Описание 2" },
    { id: 3, title: "Стартуем 3", body: "Описание 3" },
  ]);
  return (
    <div className="App">
      <Counter />
      <ClassCounter />

      <h1>Список постов</h1>
      <Post post={{ id: 0, title: "Стартуем", body: "Описание" }} />
      <Post post={{ id: 1, title: "Едем", body: "Описание_2" }} />

      {/* Пример преобразования массива объектов в массив реакт элементов*/}
      {/* Обяхательно передаём уникальный ключ. Это нужно для рэндеринга*/}
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
}
