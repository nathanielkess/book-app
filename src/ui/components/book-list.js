import React from 'react';
import PropTypes from 'prop-types';
import Book from './book';

const BooksList = props =>
  <ul className="bookList">
    { props.books.map(book =>
      <li key={book.ISBN}>
        <Book {...props} {...book} />
      </li>,
    )}
  </ul>;

BooksList.propTypes = {
  books: PropTypes.array.isRequired,
};

export default BooksList;
