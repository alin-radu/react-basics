import React, { useEffect, useState } from 'react';
import { PageLayout } from '../components/PageLayout';

const useFetchDataService = () => {
  const [data, setData] = useState(null);

  const getData = () => {
    console.log('%c-> ---> developmentConsole: getData | EXECUTED ', 'color:#77dcfd');

    setTimeout(() => {
      setData('Hello World');
      console.log('%c-> developmentConsole: getData | COMPLETED ', 'color:#77dcfd');
    }, 1000);
  };

  return {
    data,
    getData,
  };
};

const CounterUI = ({ title, data }) => (
  <>
    <p className="text-center text-gray-700 font-medium">{title}</p>
    <p className="counter">Data: {data}</p>
  </>
);

const ChildComponent = () => {
  const { data, getData } = useFetchDataService();

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <>
      {!data ? (
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
  const { data, getData } = useFetchDataService();

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <PageLayout
      title={'useService multiple instances Demo'}
      subtitle={'CounterAppDelayedContent1'}
    >
      {!data ? (
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
