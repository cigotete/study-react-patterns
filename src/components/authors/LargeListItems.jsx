import PropTypes from 'prop-types';
import { books as booksData } from '../../data/books';

export const LargeAuthorListItem = ({ author }) => {
  const { name, age, country, books } = author;
  console.log('author', author);

    // Filrtering correspoding books data of current author.
    const authorBooksData = booksData.filter(book => books.includes(book.title));
    console.log('authorBooksData', authorBooksData);

    // Set of titles that are in author list but not in JSON.
    const missingBooks = new Set(books.filter(title => !authorBooksData.some(book => book.title === title)));
    console.log('missingBooks', missingBooks);
  
    // Combining books data of JSON with missing books data.
    const combinedBooksData = [
      ...authorBooksData,
      ...Array.from(missingBooks).map(title => ({ title })),
    ];
    console.log('combinedBooksData', combinedBooksData);

  return (
    <>
      <h2>{ name }</h2>
      <p>Age: { age }</p>
      <p>Country: { country }</p>
      <h2>Books</h2>
      <ul>
        {combinedBooksData.map((book) => (
          <li key={book.title}>
            {book.title} - Pages: {book.pages || 'N/A'} - Price: ${book.price || 'N/A'}
          </li>
        ))}
      </ul>
    </>
  );
};

LargeAuthorListItem.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
    books: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};