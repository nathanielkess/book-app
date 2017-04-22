import React, { PropTypes } from 'react';
import Book from './book';

const BooksList = ({ books }) =>
  <ul className="bookList">
    { books.map(book =>
      <li key={book.ISBN}>
        <Book {...book} />
      </li>,
    )}
  </ul>;

BooksList.propTypes = {
  books: PropTypes.array.isRequired,
};

export default BooksList;
