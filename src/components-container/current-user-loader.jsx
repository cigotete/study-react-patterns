import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import PropTypes from "prop-types";

axios.defaults.baseURL = 'http://localhost:9090';

export const CurrentUserLoader = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("/current-user")
      .then(response => {
        setUser(response.data);
        console.log('response.data', response.data);
      })
      .catch(error => {
        console.log('error', error);
      });
  }, []);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user });
        }
        return child;
      })}
    </>
  );
};

CurrentUserLoader.propTypes = {
  children: PropTypes.element.isRequired,
};
