import React from "react";

/*
  *@this logic is shared to other components
  *@exposing increment,decrement methods and count/total
  *@IT DOES NOT CREATE ANY markup html this is no revelant here
  *@HTML element will be buidl in other componts that will use this state here


*/
class IncrementStateExposed extends React.Component {
  state = {
    count: 0
  };

  // Increase count
  increment = () => {
    const { count } = this.state;
    return this.setState({ count: count + 1 });
  };

  // Decrease count
  decrement = () => {
    const { count } = this.state;
    return this.setState({ count: count - 1 });
  };

  render() {
    const { count } = this.state;

    {
      /* share your state outside and render in any html here from outside */
    }
    return (
      <React.Fragment>
        {this.props.render({
          increment: this.increment,
          decrement: this.decrement,
          count
        })}
      </React.Fragment>
    );
  }
}

export default IncrementStateExposed;
