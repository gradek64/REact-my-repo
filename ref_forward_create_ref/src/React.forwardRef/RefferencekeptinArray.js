import React from "react";

function MultipleButtons(props) {
  const refArray = [];
  function showRef(i) {
    console.log(refArray[i]);
  }
  return [0, 1, 2].map((el, i) => (
    <button
      key={i}
      className="FancyButtonFirst"
      onClick={showRef.bind(null, i)}
      ref={ref => (refArray[i] = ref)}
    >
      {props.children}
    </button>
  ));
}

export default MultipleButtons;
