import { useEffect, useState } from "react";
import axios from "axios";

export const includeUserFetchingData = (Component, userId) => {
  axios.defaults.baseURL = 'http://localhost:9090';
  // eslint-disable-next-line react/display-name
  return (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await axios.get(`/users/${userId}`);
        setUser(response.data);
      })();
    });
    return <Component {...props} user={user} />;
  };
};
