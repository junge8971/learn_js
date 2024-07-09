import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { List } from "../components/List";
import { UserItem } from "../components/Users/UserItem";
import { IUser } from "../types/types";

export const UserPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const redirectToUserPersonalPage = (user: IUser) => {
    navigate("/users/" + user.id);
  };

  return (
    <List
      items={users}
      componentForRender={(user: IUser) => (
        <UserItem
          key={user.id}
          user={user}
          onClick={redirectToUserPersonalPage}
        />
      )}
    />
  );
};
