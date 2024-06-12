import React from "react";
import Counter from "./components/Сounter";
import ClassCounter from "./components/ClassCounter";

import PostList from "./components/PostList";

// Стили
import "./styles/app.css";

export default function App() {
  let [posts, set_posts] = React.useState([
    { id: 0, title: "Стартуем", body: "Описание" },
    { id: 1, title: "Едем", body: "Описание_2" },
    { id: 2, title: "Стартуем 2", body: "Описание 2" },
    { id: 3, title: "Стартуем 3", body: "Описание 3" },
  ]);
  return (
    <div className="App">
      <Counter />
      <ClassCounter />
      <PostList posts={posts} title={"Список постов"} />
    </div>
  );
}
