import React, { PropTypes } from 'react';

const Book = ({ coverImagePath, title, author, ISBN }) =>
  <div>
    <img src={coverImagePath} alt={title} />
    <p>{ title }</p>
    <p>{ author }</p>
    <p>{ ISBN }</p>
  </div>;

Book.propTypes = {
  coverImagePath: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  ISBN: PropTypes.string,
};

export default Book;
