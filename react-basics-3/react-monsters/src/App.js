import React, { Component } from 'react';
import axios from 'axios';

import CardList from './components/CardList/CardList';
import SearchBox from './components/SearchBox/SearchBox';

import classes from './App.module.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    const fetchUsers = async () => {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      this.setState({ monsters: response.data });
    };

    fetchUsers();
  }

  onInputChangeHandler = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filterMonsters = monsters.filter((el) =>
      el.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className={classes.App}>
        <SearchBox
          placeholder="search monsters"
          onInputChangeHandler={this.onInputChangeHandler}
        />
        <CardList monsters={filterMonsters} />
      </div>
    );
  }
}

export default App;
