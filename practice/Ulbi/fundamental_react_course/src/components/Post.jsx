import React from "react";

// в компоненты можно передавать информацию с помощью пропс
// props - это объект
// Что бы передать в пропс данные используется такая конструкция <ComponentName object_name={{prop_key:value}} />
export default function Post(props) {
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
          <button>Удоли</button>
        </div>
      </div>
    </div>
  );
}
