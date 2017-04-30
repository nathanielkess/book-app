import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ coverImagePath, title, author, ISBN }) =>
  <div className="book">
    <img src={coverImagePath} alt={title} />
    <p><strong>{ title }</strong></p>
    <p>Author: { author }</p>
    <p>ISBN: { ISBN }</p>
  </div>;

Book.propTypes = {
  coverImagePath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  ISBN: PropTypes.string.isRequired,
};

export default Book;
