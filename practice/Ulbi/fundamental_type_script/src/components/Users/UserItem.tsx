import { FC } from "react";

import { IUser } from "../../types/types";

interface UserItemProps {
  user: IUser;
  onClick: (user: IUser) => void;
}

export const UserItem: FC<UserItemProps> = ({ user, onClick }) => {
  return (
    <div onClick={() => onClick(user)}>
      {user.id}. {user.name} живет в {user.address.city} на улице{" "}
      {user.address.street}
    </div>
  );
};
