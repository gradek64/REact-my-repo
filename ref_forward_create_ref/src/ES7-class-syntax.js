import React from "react";

export default class ES7ClassSyntaxSupport extends React.Component {
  state = {
    loggedIn: false,
    currentState: "not-panic",
    someDefaultThing: this.props.whatever
  };

  render() {
    return <h1>{"this is ES7 Syntax for Class 4"}</h1>;
  }
}
