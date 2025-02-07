import React, { useEffect, useState } from 'react';
import { PageLayout } from '../components/PageLayout';

const CLICK_EVENT = 'onClickCustomEvent';

const CounterUI = ({ title, isOnline, toggleIsOnline }) => (
  <>
    <p className="text-center text-gray-700 font-medium">{title}</p>
    <p className="counter">Status: {isOnline ? 'ONLINE' : 'OFFLINE'}</p>
    <div className="flex justify-center mt-4">
      <button className="button" onClick={toggleIsOnline}>
        {isOnline ? 'make offline' : 'make online'}
      </button>
    </div>
  </>
);

const ParentComponentAnoterPartOfTheApp = () => {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    const changeIsOnline = () => setIsOnline((isOnline) => !isOnline);

    window.addEventListener(CLICK_EVENT, changeIsOnline);

    return () => {
      window.removeEventListener(CLICK_EVENT, changeIsOnline);
    };
  }, [isOnline]);

  const toggleIsOnline = () => {
    window.dispatchEvent(new Event(CLICK_EVENT));
  };

  return (
    <div className="child-box box">
      <CounterUI
        title="ParentComponentAnoterPartOfTheApp"
        isOnline={isOnline}
        toggleIsOnline={toggleIsOnline}
      />
    </div>
  );
};

const ParentComponent = ({ isOnline, toggleIsOnline }) => (
  <div className="box">
    <CounterUI
      title="ParentComponent"
      isOnline={isOnline}
      toggleIsOnline={toggleIsOnline}
    />
  </div>
);

const PageComponent = () => {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    const changeIsOnline = () => setIsOnline((isOnline) => !isOnline);

    window.addEventListener(CLICK_EVENT, changeIsOnline);

    return () => {
      window.removeEventListener(CLICK_EVENT, changeIsOnline);
    };
  }, [isOnline]);

  const toggleIsOnline = () => {
    window.dispatchEvent(new Event(CLICK_EVENT));
  };

  return (
    <PageLayout subtitle="IsOnlineAppBefore">
      <ParentComponent isOnline={isOnline} toggleIsOnline={toggleIsOnline} />
      <ParentComponentAnoterPartOfTheApp />
    </PageLayout>
  );
};

export default PageComponent;
