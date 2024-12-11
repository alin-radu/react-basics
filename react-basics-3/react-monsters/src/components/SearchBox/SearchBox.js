import React from 'react';

import classes from './SearchBox.module.css';

const SearchBox = ({ placeholder, onInputChangeHandler }) => {
  return (
    <input
      className={classes.Search}
      type="search"
      placeholder={placeholder}
      onChange={(event) => {
        onInputChangeHandler(event);
      }}
    />
  );
};

export default SearchBox;
