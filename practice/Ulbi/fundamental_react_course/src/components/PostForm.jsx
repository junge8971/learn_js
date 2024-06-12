import React from "react";

import CustomButton from "./UI/button/CustomButton";
import CustomInput from "./UI/input/CustomInput";

const PostForm = ({ create }) => {
  let [post, setpost] = React.useState({ title: "", body: "" });
  const alt_add_new_post = (event) => {
    event.preventDefault();

    const new_post = { ...post, id: Date.now() };
    create(new_post);
    setpost({ title: "", body: "" });
  };

  return (
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
  );
};

export default PostForm;
