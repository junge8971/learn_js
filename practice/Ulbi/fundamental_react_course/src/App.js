import React from "react";
import Counter from "./components/Сounter";
import ClassCounter from "./components/ClassCounter";

import PostForm from "./components/PostForm";

import PostList from "./components/PostList";
import PostFilter from "./components/PostsFilter";
import CustomModal from "./components/UI/modals/CustomModals";
import CustomButton from "./components/UI/button/CustomButton";

// Стили
import "./styles/app.css";

export default function App() {
  let [posts, set_posts] = React.useState([
    { id: 0, title: "Стартуем", body: "Описание" },
    { id: 1, title: "Едем", body: "Описание_2" },
    { id: 2, title: "Стартуем 2", body: "Описание 2" },
    { id: 3, title: "Стартуем 3", body: "Описание 3" },
  ]);

  let [filter_posts, set_filter_posts] = React.useState({
    post_order: "",
    search_value: "",
  });
  let [modal_window_visable, set_modal_window_visable] = React.useState(false);

  const sorted_posts = React.useMemo(() => {
    console.log("get_sorted_post");
    if (filter_posts.post_order) {
      return [...posts].sort((first, second) => {
        return first[filter_posts.post_order].localeCompare(
          second[filter_posts.post_order]
        );
      });
    } else {
      return posts;
    }
  }, [filter_posts.post_order, posts]);

  const sorted_and_searched_posts = React.useMemo(() => {
    if (filter_posts.search_value) {
      return sorted_posts.filter((post) => {
        return (
          post.title.includes(filter_posts.search_value) ||
          post.body.includes(filter_posts.search_value)
        );
      });
    } else {
      return sorted_posts;
    }
  }, [filter_posts.search_value, sorted_posts]);

  const create_new_post = (new_post) => {
    set_posts([...posts, new_post]);
    set_modal_window_visable(false);
  };

  const remove_post = (post) => {
    set_posts(posts.filter((item) => item.id !== post.id));
  };

  return (
    <div className="App">
      <Counter />
      <ClassCounter />

      <CustomButton onClick={() => set_modal_window_visable(true)}>
        Добавить пост
      </CustomButton>
      <CustomModal
        visible={modal_window_visable}
        set_modal_window_visable={set_modal_window_visable}
      >
        <PostForm create={create_new_post} />
      </CustomModal>

      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter_posts={filter_posts} set_filter_posts={set_filter_posts} />
      <PostList
        posts={sorted_and_searched_posts}
        title={"Список постов"}
        remove={remove_post}
      />
    </div>
  );
}
