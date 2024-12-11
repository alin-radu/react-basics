import React, { useState } from 'react';

const useCounterService = () => {
  const [count, setCount] = useState(0);

  const increaseCounter = () => setCount(count + 1);

  return {
    count,
    increaseCounter,
  };
};

const ParentComponent = ({ count, increaseCounter, children }) => {
  return (
    <div className="box">
      <p className="text-center text-gray-700 font-medium">ParentComponent</p>
      <p className="counter">counter: {count}</p>
      <div className="flex justify-center mt-4">
        <button className="button" onClick={increaseCounter}>
          Increment Parent Counter
        </button>
      </div>
      {children}
    </div>
  );
};

const ChildComponent = () => {
  const { count, increaseCounter } = useCounterService();

  return (
    <div className="child-box box">
      <p className="text-center text-gray-700 font-medium">ChildComponent</p>
      <p className="counter">counter: {count}</p>
      <div className="flex justify-center mt-4">
        <button className="button" onClick={increaseCounter}>
          Increment Child Counter
        </button>
      </div>
    </div>
  );
};

const PageLayout = (props) => (
  <div className="container">
    <div className="card">
      <p className="title">useService Multi-Instance Demo</p>
      <p className="title">PageComponent</p>
      <div className="flex flex-col items-center mt-4 gap-4">{props.children}</div>
    </div>
  </div>
);

const PageComponent = () => {
  const { count, increaseCounter } = useCounterService();

  return (
    <PageLayout>
      <ParentComponent count={count} increaseCounter={increaseCounter}>
        <ChildComponent />
      </ParentComponent>
    </PageLayout>
  );
};

const App = () => <PageComponent />;

export default App;
