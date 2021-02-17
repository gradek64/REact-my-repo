import React, { Component } from "react";


export default class ToggleButton extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {set: props.initialSet };
  }
  get name(){
  return this._name;  
  }
  handleClick(evt) {
    this.setState({ set: this.state.set = !this.state.set});

    console.log('this.state.set',this.state.set);
    this.props.callbackParent(this.state.set); // we notify our parent via Class props;

  }
  render() {
    return (
      <button onClick={this.handleClick}>{ this.state.set ? 'ON' : 'OFF' }</button>
    );
  }
}