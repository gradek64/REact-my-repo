import React from "react";

class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    const { x, y } = this.state;
    return (
      <div
        className="mouse"
        style={{
          height: "200px",
          width: "200px",
          backgroundColor: "pink",
          border: "1px solid"
        }}
        onMouseMove={this.handleMouseMove}
      >
        {/*
          Instead of providing a static representation of what <Mouse> renders,
          use the `render` prop to dynamically determine what to render.
        */}
        {this.props.render({ x, y })}
      </div>
    );
  }
}

export default Mouse;
