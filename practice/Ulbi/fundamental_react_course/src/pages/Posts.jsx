import React from "react";
import Counter from "../components/Сounter";
import ClassCounter from "../components/ClassCounter";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import PostFilter from "../components/PostsFilter";
import CustomModal from "../components/UI/modals/CustomModals";
import CustomButton from "../components/UI/button/CustomButton";

import PostService from "../API/PostService";

import { usePosts, usePageNumbers } from "../hooks/usePosts";
import CustomLoader from "../components/UI/loaders/CustomLoader";
import { useFetching } from "../hooks/useFetching";

import { get_page_count } from "../utils/pages.js";
import PaginationButtons from "../components/UI/pagination/PaginationButtons.jsx";

export default function Posts() {
  const [posts, set_posts] = React.useState([]);
  const [page_total_count, set_page_total_count] = React.useState(0);
  const [posts_limit, set_posts_limit] = React.useState(10);
  const [posts_page, set_posts_page] = React.useState(1);
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
  const [fetch_posts, is_posts_loading, error] = useFetching(async () => {
    const response = await PostService.get_all_posts(posts_limit, posts_page);
    const counted_pages = get_page_count(response.headers["x-total-count"], posts_limit);
    set_page_total_count(counted_pages);
    set_posts(response.data);
  });

  React.useEffect(() => {
    fetch_posts();
  }, [posts_page]);

  let array_of_pages_numbers = usePageNumbers(page_total_count, posts_limit);

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

      {is_posts_loading ? (
        <CustomLoader />
      ) : (
        <PostList
          posts={sorted_and_searched_posts}
          title={"Список постов"}
          remove={remove_post}
        />
      )}
      <PaginationButtons
        array_of_pages_numbers={array_of_pages_numbers}
        set_page={set_posts_page}
        current_page={posts_page}
      />
    </div>
  );
}
