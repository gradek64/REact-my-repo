import React from 'react';
import useCustom from '../Custom_hook_global_state';

const Counter = () => {
  const [globalState, setGlobalState] = useCustom();

  const add1Global = () => {
    const newCounterValue = globalState.counter + 1;
    setGlobalState({ counter: newCounterValue });
  };

  return (
    <div>
      <p>
        counter:
        {globalState.counter}
      </p>
      <button type="button" onClick={add1Global}>
        +1 to global
      </button>
    </div>
  );
};

export default Counter;
