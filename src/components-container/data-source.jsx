import React, { useEffect } from "react";
import { useState } from "react";
import PropTypes from "prop-types";

export const DataSource = ({ getData = () => {}, resourceName, children }) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getData();
      setResource(data);
    })();
  }, [getData]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: resource });
        }
        return child;
      })}
    </>
  );
};

DataSource.propTypes = {
  getData: PropTypes.func.isRequired,
  resourceName: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
