import React from "react";
import IncrementStateExposed from "./IncrementStateExposed";

const ComponentsUsingIncState = () => (
  <React.Fragment>
    <p story={{ borderTop: "1px dotted green" }}>some story</p>
    <IncrementStateExposed
      render={({ increment, decrement, count }) => (
        <div>
          <p>like for Katie are {count}</p>
          <button onClick={() => increment()}>Increment</button>
          <button onClick={() => decrement()}>Decrement</button>
        </div>
      )}
    />
    <p story={{ borderTop: "1px dotted green" }}>some story</p>
    <IncrementStateExposed
      render={({ increment, decrement, count }) => (
        <div>
          <p>like for Libby are {count}</p>
          <button onClick={() => increment()}>Increment</button>
          <button onClick={() => decrement()}>Decrement</button>
        </div>
      )}
    />
    <p story={{ borderTop: "1px dotted green" }}>some story</p>
    <IncrementStateExposed
      render={({ increment, decrement, count }) => (
        <div>
          <p>like for Greg are {count}</p>
          <button onClick={() => increment()}>Increment</button>
          <button onClick={() => decrement()}>Decrement</button>
        </div>
      )}
    />
    <p story={{ borderTop: "1px dotted green" }}>some story</p>
    <IncrementStateExposed
      render={({ increment, decrement, count }) => (
        <div>
          <p>like for Greg are {count}</p>
          <div style={{ backgroundColor: "green" }} onClick={() => increment()}>
            Increment
          </div>
          <div style={{ backgroundColor: "pink" }} onClick={() => decrement()}>
            Decrement
          </div>
        </div>
      )}
    />
  </React.Fragment>
);

export default ComponentsUsingIncState;
