import React from "react";

export const useSortedPosts = (post_order, posts) => {
  const sorted_posts = React.useMemo(() => {
    console.log("get_sorted_post");
    if (post_order) {
      return [...posts].sort((first, second) => {
        return first[post_order].localeCompare(second[post_order]);
      });
    } else {
      return posts;
    }
  }, [post_order, posts]);

  return sorted_posts;
};

export const usePosts = (search_value, post_order, posts) => {
  const sorted_posts = useSortedPosts(post_order, posts);

  const sorted_and_searched_posts = React.useMemo(() => {
    if (search_value) {
      return sorted_posts.filter((post) => {
        return post.title.includes(search_value) || post.body.includes(search_value);
      });
    } else {
      return sorted_posts;
    }
  }, [search_value, sorted_posts]);

  return sorted_and_searched_posts;
};
