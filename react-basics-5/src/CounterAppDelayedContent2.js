import React, { useEffect, useState } from 'react';
import { PageLayout } from './PageLayout';

const DISPLAY_LOADING_CUSTOM = 'onDisplayLogingCustom';
const HIDE_LOADING_CUSTOM = 'onHideLogingCustom';

const useFetchDataService = (component) => {
  console.log('%c-> developmentConsole: component= ', 'color:#77dcfd', component);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleDisplayIsLoading = () => {
      console.log(
        '%c-> developmentConsole: handleDisplayIsLoading= ',
        'color:#77dcfd',
        component
      );
      setIsLoading(true);
    };
    const handleHideIsLoading = () => setIsLoading(false);

    window.addEventListener(DISPLAY_LOADING_CUSTOM, handleDisplayIsLoading);
    window.addEventListener(HIDE_LOADING_CUSTOM, handleHideIsLoading);
  }, [component]);

  const triggerDisplayIsLoading = () => {
    window.dispatchEvent(new Event(DISPLAY_LOADING_CUSTOM));
  };

  const triggerHideIsLoading = () => {
    window.dispatchEvent(new Event(HIDE_LOADING_CUSTOM));
  };

  const getData = async () => {
    console.log('%c-> ---> developmentConsole: getData | EXECUTED ', 'color:#77dcfd');

    if (!isLoading) {
      triggerDisplayIsLoading();
    }

    setTimeout(() => {
      setData('Hello World');
      triggerHideIsLoading();
      console.log('%c-> developmentConsole: getData | COMPLETED ', 'color:#77dcfd');
    }, 10000);
  };

  return {
    data,
    getData,
    isLoading,
  };
};

const CounterUI = ({ title, data }) => (
  <>
    <p className="text-center text-gray-700 font-medium">{title}</p>
    <p className="counter">Data: {data}</p>
  </>
);

const ChildComponent = () => {
  console.log('%c-> developmentConsole: ChildComponent= ', 'color:#77dcfd');
  const { data, getData, isLoading } = useFetchDataService('ChildComponent');

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <>
      {!data || isLoading ? (
        <div className="child-box box">
          <h3>Loading the same data for the ChildComponent ...</h3>
        </div>
      ) : (
        <div className="child-box box">
          <CounterUI title={'ChildComponent'} data={data} />
        </div>
      )}
    </>
  );
};

const ParentComponent = ({ data, children }) => (
  <>
    <div className="box">
      <CounterUI title={'ParentComponent'} data={data} />
      {children}
    </div>
  </>
);

export const PageComponent = () => {
  const { data, getData, isLoading } = useFetchDataService('PageComponent');
  console.log('%c-> developmentConsole: data= ', 'color:#77dcfd', data);
  console.log('%c-> developmentConsole: isLoading= ', 'color:#77dcfd', isLoading);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <PageLayout
      title={'useService multiple instances Demo'}
      subtitle={'CounterAppDelayedContent2'}
    >
      {isLoading ? (
        <h3>Loading data for the PageComponent...</h3>
      ) : (
        <ParentComponent data={data}>
          <ChildComponent />
        </ParentComponent>
      )}
    </PageLayout>
  );
};

export default PageComponent;
