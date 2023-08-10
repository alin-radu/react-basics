import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ label, options, selected, onSelectedChangeHandler }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) { //udemy 179
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener('click', onBodyClick);
    return () => {
      document.body.removeEventListener('click', onBodyClick);
    };
  }, []);

  const renderedOptions = options.map((el) => {
    if (el.value === selected.value) {
      return null;
    }
    return (
      <div
        key={el.value}
        className="item"
        onClick={() => onSelectedChangeHandler(el)}
      >
        {el.label}
      </div>
    );
  });

  return (
    <div className="ui form" ref={ref}>
      <div className="field">
        <label className="label">{label}</label>
        <div
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}
          onClick={() => setOpen(!open)}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
