import PropTypes from 'prop-types';
import { useResourceGet } from "./useResourceGet.hook";

export const UserInfo = ({resourceUrl, userId}) => {
  const user = useResourceGet(resourceUrl, userId);
  const { name, age, country, books } = user || {};
  return user ? (
    <>
      <h2>{name}</h2>
      <p>Age: {age} years</p>
      <p>Country: {country}</p>
      <h2>Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book}> {book} </li>
        ))}
      </ul>
    </>
  ) : (
    <h1>Loading...</h1>
  );
};

UserInfo.propTypes = {
  resourceUrl: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
};