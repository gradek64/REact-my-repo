import React from 'react';

const App = ({ initialCount }) => {
  const [count, setCount] = React.useState(initialCount);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={() => setCount(count - 1)}>decrement</button>
    </div>
  );
};

export default App;
