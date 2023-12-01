import { useEffect, useState } from "react";
import axios from "axios";

export const useResourceGet = (resourceUrl, id) => {
  const [resource, setResource] = useState(null);
  axios.defaults.baseURL = 'http://localhost:9090';

  useEffect(() => {
    (async () => {
      const response = await axios.get(`/${resourceUrl}/${id}`);
      if (response.data.length > 0) {
        throw new Error("More than one resource found");
      } else {
        setResource(response.data);
      }
    })();
  }, [resourceUrl, id]);

  return resource;
};
