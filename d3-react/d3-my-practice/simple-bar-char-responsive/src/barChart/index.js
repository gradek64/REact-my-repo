import React from "react";
import Intro from "./intro";
import Chart from "./barChart";

export default class Risizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    };
  }
  componentDidMount() {
    window.addEventListener("resize", () => {
      this.setState({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight
      });
    });
  }
  render() {
    return (
      <React.Fragment>
        <Intro />
        <Chart
          svgWidth={this.state.windowWidth}
          svgHeight={this.state.windowHeight}
        />
      </React.Fragment>
    );
  }
}
