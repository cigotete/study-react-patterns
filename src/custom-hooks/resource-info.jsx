import PropTypes from 'prop-types';
import { useResourceGet } from "./useResourceGet.hook";

export const ResourceInfo = ({resourceUrl, id}) => {
  console.log('resourceUrl', resourceUrl);
  console.log('id', id);
  const resource = useResourceGet(resourceUrl, id);
  console.log('resource', resource);
  return resource ? (
    <>
      <ul>
        {Object.keys(resource).map((key) => (
          <li key={key}>
            <strong>{key}:</strong> {resource[key]}
          </li>
        ))}
      </ul>
    </>
  ) : (
    <h1>Loading...</h1>
  );
};

ResourceInfo.propTypes = {
  resourceUrl: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};