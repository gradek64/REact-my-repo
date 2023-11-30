import React from "react";
import ReactDOM from "react-dom";


const Index = () => (
  <div className="helloworld">
    <h2>Weclcome to webpack 4 and babel7</h2>
  </div>
);

ReactDOM.render(<Index />, document.querySelector("#root"));
