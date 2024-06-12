import React, { useRef } from "react";
import Counter from "./components/Сounter";
import ClassCounter from "./components/ClassCounter";

import CustomButton from "./components/UI/button/CustomButton";
import CustomInput from "./components/UI/input/CustomInput";

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

  //чтобы отслеживать изменение в поле ввода нужно свзатать значение поля с состоянием
  // Таким образом мы создали управляемый компонент
  let [title, set_title] = React.useState("");
  let [body, set_body] = React.useState("");
  // Данная реализаци подходит для управляемого компонента
  const add_new_post = (event) => {
    event.preventDefault();
    console.log(title);
    console.log(body);

    const new_post = {
      id: Date.now(),
      title,
      body,
    };
    set_posts([...posts, new_post]);

    // отчистка input
    set_title("");
    set_body("");
  };

  // в случае когда форма имеет большоее количество полей создавать большое количество состояние проблематично.
  //Чтобы этого избежать можно в конструктор сотсояние передавать объект а не строку
  let [post, setpost] = React.useState({ title: "", body: "" });
  // Тогда новый обработчик сосздания поста выглядит так
  const alt_add_new_post = (event) => {
    event.preventDefault();
    set_posts([...posts, { ...post, id: Date.now() }]);

    // отчистка input
    setpost({ title: "", body: "" });
  };

  return (
    <div className="App">
      <Counter />
      <ClassCounter />

      <form>
        <CustomInput
          value={post.title}
          type="text"
          placeholder="Заголовок"
          onChange={(event) => setpost({ ...post, title: event.target.value })}
        />
        <CustomInput
          value={post.body}
          type="text"
          placeholder="Текст"
          onChange={(event) => setpost({ ...post, body: event.target.value })}
        />
        <CustomButton onClick={alt_add_new_post}>Добавить пост</CustomButton>
      </form>

      <PostList posts={posts} title={"Список постов"} />
    </div>
  );
}
