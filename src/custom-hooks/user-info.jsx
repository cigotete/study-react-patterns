import PropTypes from 'prop-types';
import { useUser } from "./useUser.hook";

export const UserInfo = ({userId}) => {
  const user = useUser(userId);
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
  userId: PropTypes.string.isRequired,
};