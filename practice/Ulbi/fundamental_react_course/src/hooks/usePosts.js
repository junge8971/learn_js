import React, { useMemo } from "react";

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

export const usePageNumbers = (page_total_count, posts_limit) => {
  return useMemo(() => {
    let array_with_pages_numbers = [];
    for (let i = 0; i < page_total_count; i++) {
      array_with_pages_numbers.push(i + 1);
    }
    console.log(array_with_pages_numbers);
    return array_with_pages_numbers;
  }, [page_total_count, posts_limit]);
};
