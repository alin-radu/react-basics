import React from 'react';

const Link = ({ className, href, children }) => {
  const onClickHandler = (event) => {
    if (event.metaKey || event.ctrlkey) {
      return;
    }
    event.preventDefault();
    window.history.pushState({}, '', href); //change the URL

    const navEvent = new PopStateEvent('popstate'); //emit an event when URL change
    window.dispatchEvent(navEvent); //emit an event when URL change
  };

  return (
    <a className={className} href={href} onClick={onClickHandler}>
      {children}
    </a>
  );
};

export default Link;
