import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';

const Book = ({
  coverImagePath = 'https://images-na.ssl-images-amazon.com/images/I/51XYO1vfQyL.jpg',
  title,
  author,
  ISBN,
  showAuthenticatedStuff = false,
  onIReadThis,
  isRead = false,
}) =>
  <div className="book">
    <img src={coverImagePath} alt={title} />
    <p><strong>{ title }</strong></p>
    <p>Author: { author }</p>
    <p>ISBN: { ISBN }</p>
    {
     showAuthenticatedStuff &&
      (isRead
      ? <p>Yay! :-)</p>
      : <p>
        <Button
          onClick={() => onIReadThis({
            coverImagePath,
            title,
            author,
            ISBN,
          })}
        >I read this</Button>
      </p>)
   }
  </div>;

Book.propTypes = {
  coverImagePath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  ISBN: PropTypes.string.isRequired,
  showAuthenticatedStuff: PropTypes.bool,
  onIReadThis: PropTypes.func,
  isRead: PropTypes.bool,
};

export default Book;
