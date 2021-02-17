import React from 'react';
import { render } from 'react-dom';

// custom

import Modal from './components/logic/Modal/Modal_hook';
import { setState } from './components/global_state_hook/global_hook_state';

const TestComponent = () => (
  <div>
    <h1>this is header</h1>
    <h2>this is smaller header</h2>
    <h4>this is the smallest header</h4>
  </div>
);

const Index = () => {
  /*
   *  //const setGlobalState = useCustom()[1];
   *
   * this compoenent doenst need to hook to useCustom()
   * cause it doesnt use global state but it does change global state
   * so it only needs access to global setState() method
   *
   **/

  return (
    <React.Fragment>
      <button onClick={() => setState({ open: true, modalID: 'm1' })}>
        modal 1
      </button>
      <button onClick={() => setState({ open: true, modalID: 'm2' })}>
        modal 2
      </button>

      <Modal modalID="m1">
        <p>this is modal test</p>
      </Modal>
      <Modal modalID="m2">
        <TestComponent />
      </Modal>
    </React.Fragment>
  );
};

export default Index;

render(<Index />, document.getElementById('root'));
