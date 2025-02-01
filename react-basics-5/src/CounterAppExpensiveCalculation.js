import React, { useEffect, useState } from 'react';

const useCounterService = () => {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => setIsLoading(true), [count]);

  useEffect(() => {
    if (!isLoading) {
      return;
    }

    let timeout;

    const expensiveOperation = () => {
      timeout = setTimeout(() => {
        setIsLoading(false);
      }, 5000);
    };

    expensiveOperation();

    return () => clearTimeout(timeout);
  }, [isLoading]);

  const increaseCounter = () => setCount(count + 1);

  const resetCounter = () => setCount(0);

  return {
    count,
    increaseCounter,
    resetCounter,
    isLoading,
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

const ChildComponent = () => {
  const { count, increaseCounter, resetCounter, isLoading } = useCounterService();

  return (
    <>
      {!isLoading && (
        <div className="child-box box">
          <CounterUI
            title={'ChildComponent'}
            count={count}
            increaseCounter={increaseCounter}
            resetCounter={resetCounter}
          />
        </div>
      )}
    </>
  );
};

const PageLayout = (props) => (
  <div className="container">
    <div className="card">
      <p className="title">useService multiple instances Demo</p>
      <p className="title">CounterApp</p>
      <div className="flex flex-col items-center mt-4 gap-4">{props.children}</div>
    </div>
  </div>
);

export const PageComponent = () => {
  const { count, increaseCounter, resetCounter, isLoading } = useCounterService();

  return (
    <PageLayout
      title={'useService multiple instances Demo'}
      subtitle={'CounterAppExpensiveCalculation'}
    >
      {!isLoading && (
        <ParentComponent
          count={count}
          increaseCounter={increaseCounter}
          resetCounter={resetCounter}
        >
          <ChildComponent />
        </ParentComponent>
      )}
    </PageLayout>
  );
};

export default PageComponent;
