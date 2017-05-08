import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({
  waterMarkText = 'search',
  onSubmitFunction,
  somethingElse,
}) =>
  <div classname="SearchComponent">
    <input type="text" placeholder={waterMarkText} onClick={onSubmitFunction} />
    <input type="submit" value="search" />
  </div>;

SearchBar.propTypes = {
  waterMarkText: PropTypes.string,
  onSubmitFunction: PropTypes.func,
};

export default SearchBar;
