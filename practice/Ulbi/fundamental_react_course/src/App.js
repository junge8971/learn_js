import React from "react";
import Counter from "./components/Сounter";
import ClassCounter from "./components/ClassCounter";

import PostForm from "./components/PostForm";

import PostList from "./components/PostList";

import CustomSelect from "./components/UI/select/CustomSelect";

// Стили
import "./styles/app.css";

export default function App() {
  let [posts, set_posts] = React.useState([
    { id: 0, title: "Стартуем", body: "Описание" },
    { id: 1, title: "Едем", body: "Описание_2" },
    { id: 2, title: "Стартуем 2", body: "Описание 2" },
    { id: 3, title: "Стартуем 3", body: "Описание 3" },
  ]);

  let [post_order, set_post_order] = React.useState("");

  const change_order_in_posts = (new_order) => {
    set_post_order(new_order);
    set_posts(
      [...posts].sort((first, second) => {
        return first[new_order].localeCompare(second[new_order]);
      })
    );
  };

  const create_new_post = (new_post) => {
    set_posts([...posts, new_post]);
  };

  const remove_post = (post) => {
    set_posts(posts.filter((item) => item.id !== post.id));
  };

  return (
    <div className="App">
      <Counter />
      <ClassCounter />

      <PostForm create={create_new_post} />

      <hr style={{ margin: "15px 0" }} />
      <CustomSelect
        value={post_order}
        onChange={change_order_in_posts}
        default_value={"Сортировка по"}
        options={[
          { value: "title", name: "Сортировать по названию" },
          { value: "body", name: "Сортировать по описанию" },
        ]}
      ></CustomSelect>

      {/* Пример условной отрисовки  */}
      {posts.length !== 0 ? (
        <PostList posts={posts} title={"Список постов"} remove={remove_post} />
      ) : (
        <h1 style={{ textAlign: "center" }}> Пока постов нет</h1>
      )}
    </div>
  );
}
