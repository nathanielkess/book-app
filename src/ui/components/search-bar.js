import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';

const SearchBar = ({
  waterMarkText = 'search',
  onChange,
}) =>
  (<div className="SearchComponent">
  <input
      onChange={(e) => {
        onChange(e.target.value);
      }}
      type="text" placeholder={waterMarkText}
    />
    <Button> Click Me </Button>
  </div>);

SearchBar.propTypes = {
  waterMarkText: PropTypes.string,
  onSubmitFunction: PropTypes.func,
};

export default SearchBar;
