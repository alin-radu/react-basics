import React from 'react';

import classes from './Card.module.css';

const Card = ({ monster }) => {
  return (
    <div className={classes.cardContainer}>
      <img alt="monster" src={`https://robohash.org/${monster.id}?set=set2`} />
      <h1>{monster.name}</h1>
    </div>
  );
};

export default Card;
