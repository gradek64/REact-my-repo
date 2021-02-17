import React from 'react';
import PropTypes from 'prop-types';
import SimpleButton from '../Simplebutton/index';
import ToggleState from '../logic/ToggleState';
import ClickAwayListener from '../ClickAwayListener';

/*
  *@ToggleState is class componet that holds only logic and uses
  *@props.render method to exposed its renderMethod and toglle state
  *@SimpleButton is extending ToggleState (using its logic) and then whole thing (ToggleState and Simple button)
  *@is wrapped in ToggleSimpleButton functional component that is expoerted outside and takes props for SingleButton
*/
const ToggleSimpleButton = (props) => {
  /* eslint-disable no-lone-blocks */
  {
    /* toggleMethod is exposed from ToggleState class and allows to as well as toggle state
true or false , that could be used in other componenst as Simple button */
  }
  return (
    <ToggleState
      renderComp={(toggleMethod, toggle) => (
        <React.Fragment>
          {toggle ? <ClickAwayListener clickAway={toggleMethod} /> : null}
          <div
            className="dropdown"
            style={{ position: 'relative', display: 'flex' }}
          >
            <SimpleButton
              label={props.label}
              eventHandler={() => {
                toggleMethod(toggle);
              }}
            />
            {toggle ? (
              <div
                role="presentation"
                onClick={() => {
                  toggleMethod(toggle);
                }}
                // required by airbnb but div in this case can not be in focus
                onKeyPress={() => {}}
                style={{
                  position: 'absolute',
                  left: '0',
                  top: '0',
                }}
              >
                {props.children}
              </div>
            ) : null}
          </div>
        </React.Fragment>
      )}
    />
  );
};

ToggleSimpleButton.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
  label: PropTypes.string.isRequired,
};

export default ToggleSimpleButton;
