import React from "react";
import Post from "./Post";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default function PostList({ posts, title, remove }) {
  if (!posts.length) {
    return <h1 style={{ textAlign: "center" }}> Пока постов нет</h1>;
  }
  return (
    <div>
      {/* Пример преобразования массива объектов в массив реакт элементов*/}
      {/* Обяхательно передаём уникальный ключ. Это нужно для рэндеринга*/}
      <TransitionGroup>
        {posts.map((post) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <Post post={post} remove={remove} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}
