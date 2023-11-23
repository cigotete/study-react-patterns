import PropTypes from 'prop-types';

export const SmallBookListItem = ({ book }) => {
  const { title, pages, name } = book;
  return(
    <p> Title: { title }, Pages: { pages }, Author { name }</p>
  )
}

SmallBookListItem.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    pages: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired
};
