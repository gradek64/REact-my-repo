import React from "react";

const DisplayMousePosition = props => {
  const { mouse } = props;
  return (
    <div>
      mouseX:{mouse.x} mouseXY:{mouse.y}
    </div>
  );
};

export default DisplayMousePosition;
