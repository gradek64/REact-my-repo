import React from "react";

const Cat = props => {
  const { mouse, index } = props;
  return (
    <span
      className="cat"
      style={{ position: "absolute", left: mouse.x, top: mouse.y }}
    >
      I am cat{index} span
    </span>
  );
};

export default Cat;
