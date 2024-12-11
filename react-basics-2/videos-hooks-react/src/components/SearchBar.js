import React, { useState } from 'react';

const SearchBar = ({ onTermSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('buildings');

  const onInputChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  const onFormSubmitHandler = (event) => {
    event.preventDefault();
    onTermSubmit(searchTerm);
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onFormSubmitHandler}>
        <div className="field">
          <label>Video Search</label>
          <input
            type="text"
            value={searchTerm}
            onChange={onInputChangeHandler}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
