import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import { useFetching } from "../hooks/useFetching";
import CustomLoader from "../components/UI/loaders/CustomLoader";

export default function PostPage() {
  const { id } = useParams();
  const [post, set_post] = useState({});
  const [comments, set_comments] = useState([]);
  const [fetch_post_by_id, is_post_loading] = useFetching(async (id) => {
    const respons = await PostService.get_post_by_id(id);
    set_post(respons.data);
  });

  const [fetch_comments_by_post_id, is_comments_loading] = useFetching(async (id) => {
    const response = await PostService.get_comments_by_post_id(id);
    set_comments(response.data);
  });

  useEffect(() => {
    fetch_post_by_id(id);
    fetch_comments_by_post_id(id);
  }, []);

  return (
    <>
      {is_post_loading ? (
        <CustomLoader />
      ) : (
        <div>
          <h1>
            {post.id}. {post.title}
          </h1>
          <p>{post.body}</p>
          <h2>Комментарии</h2>
          {is_comments_loading ? (
            <CustomLoader />
          ) : (
            comments.map((comment) => (
              <div key={comment.id}>
                {comment.id}. {comment.body}{" "}
              </div>
            ))
          )}
        </div>
      )}
    </>
  );
}
