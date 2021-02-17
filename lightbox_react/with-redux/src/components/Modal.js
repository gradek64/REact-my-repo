import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { closeModal } from '../actions';

// custom imports;
import '../components/modal.scss';

class Modal extends React.Component {
  modalDomElement = React.createRef();

  componentWillUnmount() {
    // only when you change route though;
    // remove custom Event
  }

  closeModal = (e) => {
    const { closeModal: closeModalGlobal } = this.props;
    if (e && e.target !== e.currentTarget) return;
    if (e.type === 'keydown' && e.key !== 'Escape') return;
    closeModalGlobal();
  };

  render() {
    const { open, modalID, ownID } = this.props;
    const openCurrent = open && modalID === ownID;
    if (openCurrent)
      setTimeout(() => {
        this.modalDomElement.current.focus();
      }, 100);
    return (
      <React.Fragment>
        <div
          style={openCurrent ? { display: 'flex' } : { display: 'none' }}
          tabIndex={openCurrent ? -1 : 0}
          role="presentation"
          className="modal"
          //this is currentTarget
          onClick={this.closeModal}
          onKeyDown={this.closeModal}
          ref={this.modalDomElement}
        >
          <div className="modal-content">{this.props.children}</div>
        </div>
      </React.Fragment>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.any.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const { open, modalID } = state.modalReducer;
  const { modalID: ownID } = ownProps;
  return {
    open,
    modalID,
    ownID,
  };
};

const mapDispatchToProps = {
  closeModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
