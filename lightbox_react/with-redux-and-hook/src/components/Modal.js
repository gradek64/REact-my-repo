import React, { useRef } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import PropTypes from 'prop-types';
import { closeModal } from '../actions';

// custom imports;
import '../components/modal.scss';

const Modal = (ownprops) => {
  const modalDomElement = useRef(null);

  const { modalID: ownID } = ownprops;

  const { open, modalID } = useSelector(
    (state) => ({
      open: state.modalReducer.open,
      modalID: state.modalReducer.modalID,
    }),
    shallowEqual //this allows to update property if neeeded by shallow comparison of value
  );
  const dispatch = useDispatch();

  const openCurrent = open && modalID === ownID;
  if (openCurrent)
    setTimeout(() => {
      modalDomElement.current.focus();
    }, 100);

  const closeModalInternal = (e) => {
    if (e && e.target !== e.currentTarget) return;
    if (e.type === 'keydown' && e.key !== 'Escape') return;
    dispatch(closeModal());
  };

  return (
    <React.Fragment>
      <div
        style={openCurrent ? { display: 'flex' } : { display: 'none' }}
        tabIndex={openCurrent ? -1 : 0}
        role="presentation"
        className="modal"
        //this is currentTarget
        onClick={closeModalInternal}
        onKeyDown={closeModalInternal}
        ref={modalDomElement}
      >
        <div className="modal-content">{ownprops.children}</div>
      </div>
    </React.Fragment>
  );
};

Modal.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Modal;

/* const mapStateToProps = (state, props) => {
  const { open, modalID } = state.modalReducer;
  const { modalID: ownID } = props;
  return {
    open,
    modalID,
    ownID,
  };
};

const mapDispatchToProps = {
  closeModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal); */
