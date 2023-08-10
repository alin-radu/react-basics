import React from 'react';

import Card from './Card/Card';

import classes from './CardList.module.css';

const CardList = (props) => {
  const renderCards = () => {
    if (props.monsters) {
      return props.monsters.map((el) => <Card key={el.id} monster={el} />);
    }
    return <div>Loading .. </div>;
  };

  return <div className={classes.cardList}>{renderCards()}</div>;
};

export default CardList;
