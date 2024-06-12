import React from "react";
import Counter from "./components/Сounter";
import ClassCounter from "./components/ClassCounter";
import Post from "./components/Post";

// Стили
import "./styles/app.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
      <ClassCounter />
      <Post post={{ id: 0, title: "Стартуем", body: "Описание" }} />
      <Post post={{ id: 1, title: "Едем", body: "Описание_2" }} />
    </div>
  );
}
