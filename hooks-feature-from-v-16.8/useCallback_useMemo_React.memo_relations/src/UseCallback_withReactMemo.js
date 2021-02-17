import React, { useState, useCallback } from 'react';

// custom
import ChildComponentWithReactMemo from './withUseCallback/ChildComponentWithReactMemo';
import ChildComponentNoReactMemo from './withUseCallback/ChildComponentNoReactMemo';

/*
    INFO

  Sometimes you want to control parent from the child and child from the parent. With typical
  hook implementation every change in parent component with re-render child component. Sometimes this 
  behaviour can mess up initial configuration for the props so we need to find a way to stop unnecessary 
  behavior (only render on props change) and on events 

  Parent component:

  useCallback(()=>{},[])  => to lock functions so they don re-render loosing its reference to the child component 
  useMemo(()=>{},[])  => to lock functions execution so they don re-render loosing its reference to the child component 

  Child Component

  To stop child re-render unnecessary WE need check the props change, React.memo(Component) does this
  behind the scenes and only re-render if props have changed


*/

const Parent1 = () => {
  const [parentCounter, setParentCounter] = useState(2);
  const [childCounter, setChildValue] = useState(); //this initial state doesn t matter it will
  //be overridden from the child on first render

  const methodCalledFromChild = useCallback((value) => {
    //setParentCounter(parentCounter + 1); //this it will work only once since useCallback make this
    //function unique so it has access to parentCounter value only once it is registered
    setParentCounter(value + 1); //value is given as argument so it updates state from child
    setChildValue(value);
  }, []);

  return (
    <>
      <h2>{`This is parent Counter: ${parentCounter}`}</h2>
      <h2>{`This is child Counter: ${childCounter}`}</h2>
      <ChildComponentWithReactMemo
        methodCalledFromChild={methodCalledFromChild}
      />
    </>
  );
};

const Parent2 = () => {
  const [parentCounter, setParentCounter] = useState(2);
  const [childCounter, setChildValue] = useState(2);

  //this method is not unique(locked) so it has access to parentCounter on every re-render
  const methodCalledFromChild = (value) => {
    setParentCounter(parentCounter + 1);
    setChildValue(value);
  };

  return (
    <>
      <h2>{`This is parent Counter: ${childCounter}`}</h2>
      <h2>{`This is child Counter: ${childCounter}`}</h2>
      <ChildComponentNoReactMemo
        methodCalledFromChild={methodCalledFromChild}
      />
    </>
  );
};

const Parent = () => {
  return (
    <>
      <Parent1 />
      <h2>no react.Memo and no useCallback wrapper</h2>
      <Parent2 />
    </>
  );
};

export default Parent;
