import React from 'react';
import useCounter from './useCounter';

const CounterDemo = () => {
  const { count, increment, decrement, reset } = useCounter(10);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Custom Hook Demo</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement} style={{ margin: '0 10px' }}>
        Decrement
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default CounterDemo;
