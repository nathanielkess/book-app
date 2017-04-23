import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';

const Book = ({
  coverImagePath,
  title,
  author,
  ISBN,
  showAuthenticatedStuff = false,
}) =>
  <div className="book">
    <img src={coverImagePath} alt={title} />
    <p><strong>{ title }</strong></p>
    <p>Author: { author }</p>
    <p>ISBN: { ISBN }</p>
    { showAuthenticatedStuff &&
      <p>
        <Button onClick={() => console.log('fire action to select this book', ISBN)}>I read this</Button>
      </p>
    }
  </div>;

Book.propTypes = {
  coverImagePath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  ISBN: PropTypes.string.isRequired,
  showAuthenticatedStuff: PropTypes.bool,
};

export default Book;
