import { useState } from 'react';
const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  /**
   *
   * @usage: this custom hook expose array with below values that shuld be used as
   *        const [count, increment, decrement] = useCounter(0)
   **/

  return [count, increment, decrement];
};

export default useCounter;
