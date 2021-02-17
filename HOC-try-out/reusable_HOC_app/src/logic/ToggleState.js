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
    return (
      <React.Fragment>{this.props.render(this.toggle, toggle)}</React.Fragment>
    );
  }
}

ToggleState.propTypes = {
  render: PropTypes.func.isRequired,
};

export default ToggleState;
