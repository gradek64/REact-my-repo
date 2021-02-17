import React from 'react';
import PropTypes from 'prop-types';
import './simpleButton.scss';

const SimpleButton = ({ label, eventHandler, value }) => (
  <button
    className="simple-button"
    onClick={() => {
      eventHandler(value);
    }}
  >
    {label}
  </button>
);

SimpleButton.propTypes = {
  label: PropTypes.string.isRequired,
  eventHandler: PropTypes.instanceOf(Function).isRequired,
  value: PropTypes.string,
};
SimpleButton.defaultProps = {
  value: '',
};
export default SimpleButton;
