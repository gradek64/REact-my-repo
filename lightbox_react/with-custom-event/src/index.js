import React from 'react';
import { render } from 'react-dom';

// custom

import Modal from './components/logic/Modal';
import customEvent from './customEvents/dispatchEvent';

const TestComponent = () => (
  <div>
    <h1>this is header</h1>
    <h2>this is smaller header</h2>
    <h4>this is the smallest header</h4>
  </div>
);

const Index = () => (
  <React.Fragment>
    <button
      onClick={() => {
        customEvent.emit('OPEN_MODAL_1');
      }}
    >
      modal 1
    </button>
    <button
      onClick={() => {
        customEvent.emit('OPEN_MODAL_2');
      }}
    >
      modal 2
    </button>

    <Modal eventOn="OPEN_MODAL_1">
      <p>this is modal test</p>
    </Modal>
    <Modal eventOn="OPEN_MODAL_2">
      <TestComponent />
    </Modal>
  </React.Fragment>
);

export default Index;

render(<Index />, document.getElementById('root'));
