import React, { useEffect, useState } from 'react';
import { PageLayout } from '../components/PageLayout';

const CLICK_EVENT = 'onClickCustomEvent';

const useIsOnlineService = () => {
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

  return {
    isOnline,
    toggleIsOnline,
  };
};

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

const ChildComponent = () => {
  const { isOnline, toggleIsOnline } = useIsOnlineService();

  return (
    <div className="child-box box">
      <CounterUI
        title="ChildComponent"
        isOnline={isOnline}
        toggleIsOnline={toggleIsOnline}
      />
    </div>
  );
};

const ParentComponent = ({ isOnline, toggleIsOnline, children }) => (
  <div className="box">
    <CounterUI
      title="ParentComponent"
      isOnline={isOnline}
      toggleIsOnline={toggleIsOnline}
    />
    {children}
  </div>
);

const PageComponent = () => {
  const { isOnline, toggleIsOnline } = useIsOnlineService();

  return (
    <PageLayout subtitle="IsOnlineAppAfter">
      <ParentComponent isOnline={isOnline} toggleIsOnline={toggleIsOnline}>
        <ChildComponent />
      </ParentComponent>
    </PageLayout>
  );
};

export default PageComponent;
