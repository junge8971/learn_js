import React from "react";
import Post from "./Post";

export default function PostList({ posts, title, remove }) {
  if (!posts.length) {
    return <h1 style={{ textAlign: "center" }}> Пока постов нет</h1>;
  }
  return (
    <div>
      {/* Пример преобразования массива объектов в массив реакт элементов*/}
      {/* Обяхательно передаём уникальный ключ. Это нужно для рэндеринга*/}
      {posts.map((post) => (
        <Post post={post} key={post.id} remove={remove} />
      ))}
    </div>
  );
}
