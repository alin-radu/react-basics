import React, { useState } from 'react';
import { PageLayout } from '../components/PageLayout';

const useCounterService = (component) => {
  console.log(
    '%c-> developmentConsole: useCounterService | EXECUTED for ',
    'color:#77dcfd',
    component
  );

  const [count, setCount] = useState(0);

  const increaseCounter = () => {
    setCount(count + 1);
  };

  const resetCounter = () => {
    setCount(0);
  };

  const date = Date.now();
  const dateObj = new Date(date);
  const minutes = dateObj.getMinutes();
  const seconds = dateObj.getSeconds();
  const milliseconds = dateObj.getMilliseconds();

  console.log(
    '%c-> developmentConsole: resetCounter= ',
    'color:#77dcfd',
    component,
    minutes,
    ':',
    seconds,
    '.',
    milliseconds,
    'resetCounter =',
    resetCounter
  );

  return {
    count,
    increaseCounter,
    resetCounter,
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
  console.log('%c-> developmentConsole: ChildComponent | EXECUTED', 'color:#77dcfd');
  const { count, increaseCounter, resetCounter } = useCounterService('ChildComponent');

  return (
    <>
      <div className="child-box box">
        <CounterUI
          title={'ChildComponent'}
          count={count}
          increaseCounter={increaseCounter}
          resetCounter={resetCounter}
        />
      </div>
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
  const { count, increaseCounter, resetCounter } = useCounterService('PageComponent');

  return (
    <PageLayout
      title={'useService multiple instances Demo'}
      subtitle={'CounterAppExpensiveCalculation'}
    >
      {
        <ParentComponent
          count={count}
          increaseCounter={increaseCounter}
          resetCounter={resetCounter}
        >
          <ChildComponent />
        </ParentComponent>
      }
    </PageLayout>
  );
};

export default PageComponent;
