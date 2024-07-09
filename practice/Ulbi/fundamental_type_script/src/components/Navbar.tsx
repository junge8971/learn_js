import { FC } from "react";

export const Navbar: FC = () => {
  return (
    <nav>
      <a href="/users">Пользователи</a>
      <a href="/todos">Туду</a>
    </nav>
  );
};
