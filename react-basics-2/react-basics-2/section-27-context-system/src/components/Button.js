import React, { Component } from 'react';

import LanguageContext from '../contexts/LanguageContex';

class Button extends Component {
  static contextType = LanguageContext;

  render() {
    const text = this.context === 'english' ? 'Submit' : 'Inregistrare';
    return <button className="ui button primary"> {text} </button>;
  }
}

export default Button;
