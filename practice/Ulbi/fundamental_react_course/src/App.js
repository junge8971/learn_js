import React from "react";
import Counter from "./components/Сounter";
import ClassCounter from "./components/ClassCounter";

import PostForm from "./components/PostForm";

import PostList from "./components/PostList";
import PostFilter from "./components/PostsFilter";
import CustomModal from "./components/UI/modals/CustomModals";
import CustomButton from "./components/UI/button/CustomButton";
import axios from "axios";

// Стили
import "./styles/app.css";
import { usePosts } from "./hooks/usePosts";

export default function App() {
  async function getPosts() {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log(response);
    set_posts(response.data);
  }

  const [posts, set_posts] = React.useState([]);

  const [filter_posts, set_filter_posts] = React.useState({
    post_order: "",
    search_value: "",
  });
  const [modal_window_visable, set_modal_window_visable] = React.useState(false);
  const sorted_and_searched_posts = usePosts(
    filter_posts.search_value,
    filter_posts.post_order,
    posts
  );

  React.useEffect(() => {
    getPosts();
  }, []);

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
