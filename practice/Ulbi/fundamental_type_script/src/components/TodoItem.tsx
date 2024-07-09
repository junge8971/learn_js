import { FC } from "react";

import { ITodo } from "../types/types";

interface TodoItemProps {
  todo: ITodo;
}

export const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  return (
    <div>
      {todo.id}. {todo.title} -{" "}
      <input type="checkbox" checked={todo.completed} />
    </div>
  );
};
