import React, { useState } from "react";
const Comp = (props) => <p>{props.rendered}</p>;

/**
 *
 * @usage:
 * <App/> top container/component  will be rendered on server site and it will accept also
 * props send it to it (no need to match content on server cause) cause this component
 * is imported directly in server.js so this is being rendered on server site and displayed
 * You also need webpack configuration for both server and browser check webpack.config.js
 **/

const App = (propsFromNode) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <Comp rendered="should be rendered here" />
      </div>
      <p>
        Hello there {propsFromNode.name} and likes {propsFromNode.likes}{" "}
      </p>
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    </div>
  );
};

export default App;
