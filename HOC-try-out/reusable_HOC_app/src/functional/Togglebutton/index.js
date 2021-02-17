import React from 'react';
import PropTypes from 'prop-types';
import SimpleButton from '../Simplebutton/index';
import ToggleState from '../../logic/ToggleState';
/*
  *@ToggleState is class component that holds only logic and uses
  *@props.render method to exposed its renderMethod and toggle state
  *@SimpleButton is extending ToggleState (using its logic) and then whole thing (ToggleState and Simple button)
  *@is wrapped in ToggleSimpleButton functional component that is expoerted outside and takes props for SingleButton
*/
const ToggleSimpleButton = (props) => {
  {
    /* toggleMethod is exposed from ToggleState class and allows to as well as toggle state
true or false , that could be used in other componenst as Simple button */
  }
  return (
    <ToggleState
      render={(toggleMethod, toggle) => (
        <SimpleButton
          label={`${props.label} ${
            toggle ? props.toggleLabels[0] : props.toggleLabels[1]
          }`}
          eventHandler={() => {
            toggleMethod(toggle);
            props.action(toggle ? props.values[0] : props.values[1]);
          }}
        />
      )}
    />
  );
};

ToggleSimpleButton.propTypes = {
  label: PropTypes.string.isRequired,
  toggleLabels: PropTypes.instanceOf(Array).isRequired,
  values: PropTypes.instanceOf(Array).isRequired,
  action: PropTypes.instanceOf(Function).isRequired,
};

export default ToggleSimpleButton;
