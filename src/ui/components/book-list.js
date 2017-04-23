import React from 'react';
import PropTypes from 'prop-types';
import Book from './book';

const BooksList = ({ books, showAuthenticatedStuff }) =>
  <ul className="bookList">
    { books.map(book =>
      <li key={book.ISBN}>
        <Book showAuthenticatedStuff={showAuthenticatedStuff} {...book} />
      </li>,
    )}
  </ul>;

BooksList.propTypes = {
  books: PropTypes.array.isRequired,
  showAuthenticatedStuff: PropTypes.bool,
};

export default BooksList;
