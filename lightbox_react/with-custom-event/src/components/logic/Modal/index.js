import React from 'react';
import PropTypes from 'prop-types';

// custom imports;
import customEvent from '../../../customEvents/dispatchEvent';
import './modal.scss';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount = () => {
    const { eventOn } = this.props;

    if (!eventOn) {
      console.warn('your custom event is not specified');
      return;
    }
    customEvent.on(eventOn, this.openModal);
    customEvent.on(`CLOSE_${eventOn}`, this.closeModal);
  };

  componentWillUnmount() {
    // only when you change route though;
    // remove custom Event
  }

  openModal() {
    const delaySelector = setTimeout(() => {
      clearTimeout(delaySelector);
      document.querySelector('[tabIndex="-1"]').focus();
    }, 100);
    this.setState({ open: true });
  }
  closeModal(e) {
    if (e && e.target !== e.currentTarget) return;
    if (e.type === 'keydown' && e.key !== 'Escape') return;
    this.setState({ open: false });
  }

  render() {
    const { open } = this.state;
    return (
      <React.Fragment>
        <div
          style={open ? { display: 'flex' } : { display: 'none' }}
          tabIndex={open ? -1 : 0}
          role="presentation"
          className="modal"
          //this is currentTarget
          onClick={this.closeModal}
          onKeyDown={this.closeModal}
          ref={this.clickAway}
        >
          <div className="modal-content">{this.props.children}</div>
        </div>
      </React.Fragment>
    );
  }
}

Modal.propTypes = {
  eventOn: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};
export default Modal;
