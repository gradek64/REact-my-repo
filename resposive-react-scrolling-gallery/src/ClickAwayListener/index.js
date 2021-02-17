import React from 'react';
import PropTypes from 'prop-types';

const style = {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100vh',
};
/* handleKeyPress is required by airbnb standard lint but in this case is redundant
cause div is not focusable so it wont work  */
const handleKeyPress = (e) => {
};
const ClickAwayListenerComp = (styles) => {
  const ClickAwayListener = (props) => {
    const { clickAway } = props;
    return (
      <div
        style={styles}
        className="pageMask"
        role="presentation"
        onClick={() => { clickAway(true); }}
        onKeyPress={handleKeyPress}
      />
    );
  };

  ClickAwayListener.propTypes = {
    clickAway: PropTypes.instanceOf(Function).isRequired,
  };

  return ClickAwayListener;
};

export default ClickAwayListenerComp(style);
