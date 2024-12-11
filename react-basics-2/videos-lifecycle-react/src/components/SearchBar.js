import React from 'react';

class SearchBar extends React.Component {
  state = { searchTerm: '' };

  onInputChangeHandler = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  onFormSubmitHandler = (event) => {
    event.preventDefault();
    this.props.onTermSubmit(this.state.searchTerm);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmitHandler}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.searchTerm}
              onChange={this.onInputChangeHandler}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
