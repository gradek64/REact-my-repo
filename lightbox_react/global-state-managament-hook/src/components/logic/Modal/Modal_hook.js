import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import dispatchEvent from '../../../customEvents/dispatchEvent';
import useStateGlobal from '../../global_state_hook/global_hook_state';

// custom imports;
import './modal.scss';

const Modal = (props) => {
  const modalDomElement = useRef(null);
  /**
   *
   * it only way to re-render a component is either using hook or class
   * component, thefore we register a hook here that is using
   * higher order hook that returns useState()
   * this internal/global hook updates global state
   * thefore affecting every component connected to useStateGlobal()
   * this causing rerending component connected to useStateGlobal()
   *
   **/
  const [state, updateStateFromGlobal] = useStateGlobal();

  //------- internal close method ----
  const { modalID: modalIDprop } = props;
  const closeModal = (e) => {
    if (e && e.target !== e.currentTarget) return;
    if (e.type === 'keydown' && e.key !== 'Escape') return;
    updateStateFromGlobal({ open: false, modalID: modalIDprop });
  };
  //------- ------- ----------

  const { open, modalID } = state;
  const openCurrent = open && modalID === modalIDprop;
  if (openCurrent)
    setTimeout(() => {
      modalDomElement.current.focus();
    }, 100);

  console.log('state in modal', state);
  //this is for preventing uneccessary render
  if (!openCurrent) return null;
  console.log('re-rendered');
  return (
    <React.Fragment>
      <div
        data-testid="modal"
        style={openCurrent ? { display: 'flex' } : { display: 'none' }}
        tabIndex={openCurrent ? -1 : 0}
        role="presentation"
        className="modal"
        //this is currentTarget
        onClick={closeModal}
        onKeyDown={closeModal}
        ref={modalDomElement}
      >
        <div className="modal-content">{props.children}</div>
      </div>
    </React.Fragment>
  );
};

Modal.propTypes = {
  modalID: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};
export default Modal;
