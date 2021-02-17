import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../actions';
import Modal from '../components/Modal';

const TestComponent = () => (
  <div>
    <h1>this is header</h1>
    <h2>this is smaller header</h2>
    <h4>this is the smallest header</h4>
  </div>
);

const Content = (props) => {
  const { openModal } = props;

  return (
    <React.Fragment>
      <button
        onClick={() => {
          openModal('m1');
        }}
      >
        modal 1
      </button>
      <button
        onClick={() => {
          openModal('m2');
        }}
      >
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
const mapDispatchToProps = {
  openModal,
  closeModal,
};

export default connect((state) => state, mapDispatchToProps)(Content);
