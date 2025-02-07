import React, { useEffect, useState } from 'react';
import { PageLayout } from '../components/PageLayout';

const useUniversalService = (componet) => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData(componet);
  }, []);

  const fetchData = async () => {
    console.log(
      '%c-> developmentConsole: fetchData from componet | ',
      'color:#77dcfd',
      componet
    );

    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((json) => setData(json.title));
  };

  const increaseCounter = () => setCount(count + 1);
  const resetCounter = () => setCount(0);

  return {
    count,
    increaseCounter,
    resetCounter,
    data,
  };
};

const CounterUI = ({ title, count, increaseCounter, resetCounter }) => (
  <>
    <p className="text-center text-gray-700 font-medium">{title}</p>
    <p className="counter">counter: {count}</p>
    <div className="flex justify-center mt-4">
      <button className="button" onClick={increaseCounter}>
        Increment Counter
      </button>
      <button className="button ml-6" onClick={resetCounter}>
        Reset Counter
      </button>
    </div>
  </>
);

const ChildComponent = () => {
  const { data } = useUniversalService('ChildComponent');

  return (
    <>
      <div className="child-box box">{data ? data : 'Loading...'}</div>
    </>
  );
};

const ParentComponent = ({ count, increaseCounter, resetCounter, children }) => (
  <div className="box">
    <CounterUI
      title={'ParentComponent'}
      count={count}
      increaseCounter={increaseCounter}
      resetCounter={resetCounter}
    />
    {children}
  </div>
);

export const PageComponent = () => {
  const { count, increaseCounter, resetCounter } = useUniversalService('PageComponent');

  return (
    <PageLayout
      title={'useService multiple instances Demo'}
      subtitle={'CounterAppStateNotSynchronized'}
    >
      <ParentComponent
        count={count}
        increaseCounter={increaseCounter}
        resetCounter={resetCounter}
      >
        <ChildComponent />
      </ParentComponent>
    </PageLayout>
  );
};

export default PageComponent;
