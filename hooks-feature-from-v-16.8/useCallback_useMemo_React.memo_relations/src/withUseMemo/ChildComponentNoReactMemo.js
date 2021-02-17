import React, { useState } from 'react';

const ChildComponentWithReactMemo = (props) => {
  /*eslint-disable react/prop-types*/
  const { methodCalledFromChild } = props;

  const [value, setValue] = useState(0);

  /*
    This component is not wrapped with 
    React.Memo(ChildComponentWithReactMemo) so it will re-render event if the props 
    have not changed. However in this example we don t care if we re-render functional body again 
    cause our state is controlled in setState hook. So the same as ChildComponentWithReactMemo.js has been 
    achieved here, all depends from the scenario.
  */

  const updateValue = () => {
    setValue(value + 1);
    methodCalledFromChild(value);
  };

  return (
    <div>
      <button onClick={updateValue}>{'Child counter'}</button>
    </div>
  );
};

export default ChildComponentWithReactMemo;
