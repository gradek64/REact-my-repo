import React from 'react';

const ChildComponentWithReactMemo = (props) => {
  /*eslint-disable react/prop-types*/
  const { methodCalledFromChild } = props;

  let value = 1000;
  /*
    React.Memo(ChildComponentWithReactMemo) will stop unnecessary render 
    therefore value = 0 should be called only once. The component should not 
    re-render as long as the props stay the same;

  */

  const updateValue = () => {
    value++;
    methodCalledFromChild(value);
  };

  //initial state set for parent from the child
  methodCalledFromChild(value); //this part wont re-render so it safe it wont change

  return (
    <div>
      <button onClick={updateValue}>{'Child counter'}</button>
    </div>
  );
};

export default React.memo(ChildComponentWithReactMemo);
