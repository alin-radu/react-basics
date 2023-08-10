import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((el, index) => {
    const active = index === activeIndex ? 'active' : '';
    
    return (
      <React.Fragment key={el.title}>
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {el.title}
        </div>
        <div className={`content ${active}`}>
          <p>{el.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
