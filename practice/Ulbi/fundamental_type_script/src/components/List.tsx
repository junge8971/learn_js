import { ReactNode } from "react";

interface UserListProps<T> {
  items: T[];
  componentForRender: (item: T) => ReactNode;
}

export const List = <T,>({ items, componentForRender }: UserListProps<T>) => {
  return <div>{items.map(componentForRender)}</div>;
};
