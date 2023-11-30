import { useEffect, useState } from "react";
import axios from "axios";

export const useUser = (userId) => {
  const [user, setUser] = useState(null);
  axios.defaults.baseURL = 'http://localhost:9090';

  useEffect(() => {
    (async () => {
      const response = await axios.get(`/users/${userId}`);
      if (response.data.length > 0) {
        throw new Error("More than one user found");
      } else {
        setUser(response.data);
      }
    })();
  }, [userId]);

  return user;
};
