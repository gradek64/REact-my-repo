import React from "react";
import ReactDOM from "react-dom";
// custom
import ES7ClassSyntaxSupport from "./ES7-class-syntax";

const jsx = (
  <div>
    <h1>works and ti says hi !</h1>
    <ES7ClassSyntaxSupport />
  </div>
);

ReactDOM.render(jsx, document.getElementById("app"));
