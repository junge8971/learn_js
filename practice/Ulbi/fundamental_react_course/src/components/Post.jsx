import React from "react";
import CustomButton from "./UI/button/CustomButton";

// в компоненты можно передавать информацию с помощью пропс
// props - это объект
// Что бы передать в пропс данные используется такая конструкция <ComponentName object_name={{prop_key:value}} />
export default function Post({ remove, ...props }) {
  return (
    <div className="App">
      <div className="post">
        <div className="post_content">
          <strong>
            {props.post.id}. {props.post.title}
          </strong>
          <div>{props.post.body}</div>
        </div>
        <div className="post_btns">
          <CustomButton onClick={() => remove(props.post)}>Удоли</CustomButton>
        </div>
      </div>
    </div>
  );
}
