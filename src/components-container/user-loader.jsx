import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import PropTypes from "prop-types";

axios.defaults.baseURL = 'http://localhost:9090';

export const UserLoader = ({ userId, children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`/users/${userId}`)
      .then(response => {
        setUser(response.data);
        console.log('response.data', response.data);
      })
      .catch(error => {
        console.log('error', error);
      });
  }, [userId]);

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

UserLoader.propTypes = {
  userId: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};