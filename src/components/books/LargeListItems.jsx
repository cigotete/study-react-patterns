import PropTypes from 'prop-types';

export const LargeBookListItem = ({ book }) => {
  const { title, pages, name, price } = book;
  return (
    <>
      <h2>{ title }</h2>
      <p>Pages: { pages }</p>
      <p>Author: { name }</p>
      <p>Price: { price }</p>
    </>
  );
};

LargeBookListItem.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    pages: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};