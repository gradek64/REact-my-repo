import React, { useRef } from 'react';
//this has to be outside for component to not update (bad practice)
//let value1 = 0;
const ChildComponentWithReactMemo = (props) => {
  /*eslint-disable react/prop-types*/
  const { methodCalledFromChild } = props;

  /*
    methodCalledFromChild is not unique every time Parent re-renders 
    it creates new instance of methodCalledFromChild in memory what 
    causing props change even though they seem to be the same in terms of values
    but for javascript they are not the same 

    That is why this component will re-render its body even with  React.memo(ChildComponentWithReactMemo)
    cause reference to the methodCalledFromChild changes

  */
  //updates to useRef hook doesnt cause re-render so you can keep the value here
  let value1 = useRef(0);

  const updateValue = () => {
    value1.current++;
    console.log('value in child', value1.current);
    methodCalledFromChild(value1.current);
  };

  return (
    <div>
      <button
        onClick={() => {
          updateValue();
        }}
      >
        {'Child counter'}
      </button>
    </div>
  );
};

export default React.memo(ChildComponentWithReactMemo);
