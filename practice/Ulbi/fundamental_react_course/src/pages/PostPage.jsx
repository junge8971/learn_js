import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import { useFetching } from "../hooks/useFetching";
import CustomLoader from "../components/UI/loaders/CustomLoader";

export default function PostPage() {
  const { id } = useParams();
  const [post, set_post] = useState({});
  const [fetch_post_by_id, is_post_loading, error] = useFetching(async (id) => {
    const respons = await PostService.get_post_by_id(id);
    set_post(respons.data);
  });

  useEffect(() => {
    fetch_post_by_id(id);
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
        </div>
      )}
    </>
  );
}
