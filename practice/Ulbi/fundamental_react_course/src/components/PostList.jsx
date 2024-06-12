import React from "react";
import Post from "./Post";

export default function PostList({ posts, title }) {
  return (
    <div>
      <h1>{title}</h1>

      {/* Пример преобразования массива объектов в массив реакт элементов*/}
      {/* Обяхательно передаём уникальный ключ. Это нужно для рэндеринга*/}
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
}
