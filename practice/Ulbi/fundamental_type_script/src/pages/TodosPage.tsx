import axios from "axios";
import { FC, useEffect, useState } from "react";

import { List } from "../components/List";
import { TodoItem } from "../components/TodoItem";
import { ITodo } from "../types/types";

export const TodosPage: FC = () => {
  const [todoList, setTodoList] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchTodoLIst();
  }, []);

  const fetchTodoLIst = async () => {
    try {
      const response = await axios.get<ITodo[]>(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      setTodoList(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <List
      items={todoList}
      componentForRender={(todo: ITodo) => (
        <TodoItem todo={todo} key={todo.id} />
      )}
    />
  );
};
