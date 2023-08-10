import React, { useState } from 'react';

import Accordion from './components/Accordion/Accordion';
import Search from './components/Search/Search';
import Dropdown from './components/Dropdown/Dropdown';
import Translate from './components/Translate/Translate';
import Route from './Route';
import Header from './Header';

const itemsAccordion = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework.',
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers.',
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating reutilisable componets.',
  },
];

const optionsDropdown = [
  { label: 'The Color Red', value: 'red' },
  { label: 'The Color Green', value: 'green' },
  { label: 'The Color Blue', value: 'blue' },
];

const App = () => {
  const [selected, setSelected] = useState(optionsDropdown[0]);

  return (
    <div className="ui container">
      <br />
      <Header />
      <Route path="/">
        <Accordion items={itemsAccordion} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a Color"
          options={optionsDropdown}
          selected={selected}
          onSelectedChangeHandler={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
