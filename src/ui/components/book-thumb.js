import React from 'react';
import PropTypes from 'prop-types';

const BookThumb = ({
  coverImagePath = 'https://images-na.ssl-images-amazon.com/images/I/51XYO1vfQyL.jpg',
  title,
}) =>
  <div className="bookThumbnail">
    <img src={coverImagePath} alt={title} />
  </div>;

BookThumb.propTypes = {
  coverImagePath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default BookThumb;
