import React from "react";
import ReactDOM from "react-dom";
// custom
import Cat from "./Cat";
import Mouse from "./Mouse";
import ComponentsUsingIncState from "./ComponentsUsingIncState";
import ComponentsComposition from "./ComponentsUsingHOC";

const MouseTracker = () => (
  <React.Fragment>
    <div>
      <h1>Move the mouse around!</h1>
      <Mouse
        render={mouse => (
          <React.Fragment>
            <Cat mouse={mouse} index={0} />
            <Cat mouse={mouse} index={1} />
          </React.Fragment>
        )}
      />
    </div>
    <div>
      <h1>Share state with components</h1>
      <ComponentsUsingIncState />
      <h1> Same example as above but with composition HOC technique</h1>
      <ComponentsComposition />
    </div>
  </React.Fragment>
);

ReactDOM.render(<MouseTracker />, document.getElementById("app"));
