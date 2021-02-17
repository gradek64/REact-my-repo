import React from "react";

/*
  *@I am using this class only for logic for all buttons
  *@so this class is returning Component since every component pass to it using same logic
*/
const HOCLogic = Component =>
  class IncrementState extends React.Component {
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

      const props = {
        increment: this.increment,
        decrement: this.decrement,
        count
      };
      return <Component {...props} />;
    }
  };

const VersionBttn1 = HOCLogic(({ increment, decrement, count }) => (
  <div>
    <p>like for Katie are {count}</p>
    <button onClick={() => increment()}>Increment</button>
    <button onClick={() => decrement()}>Decrement</button>
  </div>
));
const VersionBttn2 = HOCLogic(({ increment, decrement, count }) => (
  <div>
    <p>like for Libby are {count}</p>
    <button onClick={() => increment()}>Increment</button>
    <button onClick={() => decrement()}>Decrement</button>
  </div>
));
const VersionBttn3 = HOCLogic(({ increment, decrement, count }) => (
  <div>
    <p>like for Greg are {count}</p>
    <div style={{ backgroundColor: "green" }} onClick={() => increment()}>
      Increment
    </div>
    <div style={{ backgroundColor: "pink" }} onClick={() => decrement()}>
      Decrement
    </div>
  </div>
));

const ComponentsComposition = () => (
  <React.Fragment>
    <p story={{ borderTop: "1px dotted green" }}>some story</p>
    <VersionBttn1 />
    <p story={{ borderTop: "1px dotted green" }}>some story</p>
    <VersionBttn2 />
    <p story={{ borderTop: "1px dotted green" }}>some story</p>
    <VersionBttn3 />
  </React.Fragment>
);

export default ComponentsComposition;
