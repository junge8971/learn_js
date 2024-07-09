import axios from "axios";
import { useEffect, useState } from "react";
import { useHis, useNavigate, useParams } from "react-router-dom";

import { IUser } from "../../types/types";

interface UserPageParams {
  id: string;
}

export const UserPersonalPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const params = useParams<UserPageParams>();
  const navigate = useNavigate();

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await axios.get<IUser>(
        "https://jsonplaceholder.typicode.com/users/" + params.id
      );
      setUser(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <button onClick={() => navigate(-1)}>Назад</button>
      <h1>Страница пользователя {user?.name}</h1>
      <div>{user?.name}</div>
    </div>
  );
};
