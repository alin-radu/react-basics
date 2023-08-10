import React, { Component } from 'react';

import LanguageContext from '../contexts/LanguageContex';

import UserCreate from './UserCreate';

class App extends Component {
  state = {
    language: 'romanian',
  };

  onLanguageChange = (language) => {
    this.setState({ language: language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language :{' '}
          <i
            className="flag us"
            onClick={() => this.onLanguageChange('english')}
          />
          <i
            className="flag ro"
            onClick={() => this.onLanguageChange('romanian')}
          />
        </div>
        <LanguageContext.Provider value={this.state.language}>
          <UserCreate />
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
