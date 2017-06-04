import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';

const SearchBar = ({
  waterMarkText = 'search',
  onChange,
  onSearch,
}) =>
  (<div className="SearchComponent">
    <input
      onChange={(e) => {
        onChange(e.target.value);
      }}
      type="text" placeholder={waterMarkText}
    />
    <Button onClick={onSearch}> Click Me </Button>
  </div>);

SearchBar.propTypes = {
  waterMarkText: PropTypes.string,
  onSearch: PropTypes.func,
  onChange: PropTypes.func,
};

export default SearchBar;
