import React, { useState } from 'react';

import Dropdown from '../Dropdown/Dropdown';
import Convert from './Convert';

const optionsTranslate = [
  { label: 'Afrikaans', value: 'af' },
  { label: 'Arabic', value: 'ar' },
  { label: 'Hindi', value: 'hi' },
];

const Translate = () => {
  const [language, setLanguage] = useState(optionsTranslate[0]);
  const [text, setText] = useState('');

  const onChangeInputHandler = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={onChangeInputHandler} />
        </div>
      </div>

      <br />

      <Dropdown
        label="Select a Language"
        options={optionsTranslate}
        selected={language}
        onSelectedChangeHandler={setLanguage}
      />

      <br />

      <hr />

      <br />

      <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;
