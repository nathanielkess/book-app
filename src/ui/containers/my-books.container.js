import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import BookThumb from './../components/book-thumb';
import { getBooksRead } from './../../model/raw-selectors';

const mapStateToProps = createStructuredSelector({
  books: getBooksRead,
});

export default connect(mapStateToProps, null)(
  ({ books }) =>
    <ul className="booksReadList">
      { books.map(book =>
        <li key={book.ISBN}>
          <BookThumb {...book} />
        </li>,
      )}
    </ul>,
  );
