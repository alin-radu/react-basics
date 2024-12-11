import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContex';

class Field extends Component {
  static contextType = LanguageContext;

  render() {
    const text = this.context === 'english' ? 'Submit' : 'Inregistrare';

    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

export default Field;
