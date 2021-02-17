import React from 'react';
//custom
import useCounter from './useCounter';
import useDocumentTitle from './useDocumentTitle';

const ExampleClickUpdate = () => {
  /**
   *
   * @usage: the logic has been extracted outside with coustom hook useCounter
   * IMPORATANT :  custom hooks in order to work they have to be plaed inside functional componnet
   * just like any other regular hook
   **/

  const [count, increment, decrement] = useCounter(0);
  //update document title custom hook
  useDocumentTitle(count);
  return (
    <div style={{ border: '1px dashed purple' }}>
      <h2>with custom hook</h2>
      <p id="display" data-testid="counter">{`You clicked ${count} times`}</p>
      <button type="button" onClick={increment}>
        Click me up
      </button>
      <button type="button" onClick={decrement}>
        Click me down
      </button>
    </div>
  );
};

export default ExampleClickUpdate;
