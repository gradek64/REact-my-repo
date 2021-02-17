import React from 'react';
import PropTypes from 'prop-types';

// custom
import './simpleButton.scss';


const SimpleButton = ({ label, eventHandler }) => (
  <input
    className="simple-button"
    type="button"
    onClick={eventHandler}
    value={label}
  />
);
export default SimpleButton;

SimpleButton.propTypes = {
  eventHandler: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};
