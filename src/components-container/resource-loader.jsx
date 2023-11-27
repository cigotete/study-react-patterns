import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import PropTypes from "prop-types";

axios.defaults.baseURL = 'http://localhost:9090';

export const ResourceLoader = ({ ResourceUrl, ResourceName, children }) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    axios.get(ResourceUrl)
      .then(response => {
        setResource(response.data);
        console.log('response.data', response.data);
      })
      .catch(error => {
        console.log('error', error);
      });
  }, [ResourceUrl]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [ResourceName]: resource 
          });
        }
        return child;
      })}
    </>
  );
};

ResourceLoader.propTypes = {
  ResourceUrl: PropTypes.string.isRequired,
  ResourceName: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};