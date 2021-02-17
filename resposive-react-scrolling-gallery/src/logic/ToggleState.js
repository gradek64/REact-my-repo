import React from 'react';
import PropTypes from 'prop-types';

/*
  *@this is very clever class all it does it provides logic for toggling (state of true or false)
  and expose it toggleMethod and toggle state in props.render to other components
  *@
*/
class ToggleState extends React.Component {
  state = {
    toggle: false,
  };

  toggle = (toggle) => {
    this.setState({ toggle: !toggle });
  };

  render() {
    const { toggle } = this.state;
    const { renderComp } = this.props;
    return (
      <React.Fragment>{renderComp(this.toggle, toggle)}</React.Fragment>
    );
  }
}

ToggleState.propTypes = {
  renderComp: PropTypes.func.isRequired,
};

export default ToggleState;
