import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';

const SearchBox = ({ watermark = 'Search...', onSubmit, onChange }) =>
  <div>
    <input
      type="text"
      placeholder={watermark}
      onChange={onChange}
    />
    <Button onClick={onSubmit}>
      Search
    </Button>
  </div>;

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func,
  watermark: PropTypes.string,
};

export default SearchBox;
