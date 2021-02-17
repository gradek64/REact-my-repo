import React, { useState, useEffect } from 'react';

const StateCounterV2 = () => {
  /**
   *
   * @usage: to achive similar outcome to useReducer , We should combine your state
   * so it resides in one object. Unless they are not depend on each other then you should
   * keep them seperate for clean code read.
   *
   * let [count, setCount] = useState(0);
   * let [frozen, setFrozen] = useState(false);
   *
   * one they seperated they dont know about each other update imidiatelly
   *
   **/

  let [state, setState] = useState({
    count: 0,
    frozen: false,
  });

  const increment = () => {
    setState((prevState) => {
      if (prevState.frozen) {
        return prevState;
      }
      return {
        ...prevState,
        count: prevState.count + 1,
      };
    });
  };

  const setFrozen = (frozen) => {
    setState((prevState) => ({
      ...prevState,
      frozen,
    }));
  };

  useEffect(() => {
    increment();
    setFrozen(true);
    increment();
  }, []);

  return (
    <>
      <h2>useState example compare</h2>
      <div>{state.count}</div>
    </>
  );
};

export default StateCounterV2;
