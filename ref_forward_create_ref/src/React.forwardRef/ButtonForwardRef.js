import React from "react";

/*
      Both ref create and forwarded created the same result pointing  to <button>
      the forward method seems a bit cleanear just a preference for anyone,

      Click on buttons to see DOM element that ref represents;

*/

function FancyButton(props) {
  const ref = React.createRef();
  function showRef() {
    console.log(ref.current);
  }
  return (
    <button className="FancyButtonFirst" onClick={showRef} ref={ref}>
      {props.children}
    </button>
  );
}

const FancyButtonRefForward = React.forwardRef((props, refForward) => {
  const showRef = () => {
    console.log(refForward.current);
  };
  return (
    <button className="FancyButton" onClick={showRef} ref={refForward}>
      {props.children}
    </button>
  );
});
export { FancyButton, FancyButtonRefForward };
