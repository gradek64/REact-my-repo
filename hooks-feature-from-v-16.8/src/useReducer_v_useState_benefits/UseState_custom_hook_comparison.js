import React, { useState, useEffect, useMemo } from 'react';

const useApi = (apiFactory, initialState) => {
  let [state, setState] = useState(initialState);
  return useMemo(() => apiFactory({ state, setState }), [
    state,
    setState,
    apiFactory,
  ]);
};

const counterApiFactory = ({ state, setState }) => {
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

  const count = state.count;
  const frozen = state.frozen;

  return {
    increment,
    setFrozen,
    count,
    frozen,
  };
};

const StateCounterV4 = ({ count = 0, frozen = false }) => {
  const counterApi = useApi(counterApiFactory, {
    count,
    frozen,
  });

  useEffect(() => {
    counterApi.increment();
    counterApi.setFrozen(true);
    counterApi.increment();
  }, []);

  return <div>{counterApi.count}</div>;
};

export default StateCounterV4;
