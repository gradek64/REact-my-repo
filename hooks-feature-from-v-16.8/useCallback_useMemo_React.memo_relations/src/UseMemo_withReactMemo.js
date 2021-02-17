import React, { useState, useMemo, useEffect } from 'react';

// custom
import ChildComponentWithReactMemo from './withUseMemo/ChildComponentWithReactMemo';
import ChildComponentNoReactMemo from './withUseMemo/ChildComponentNoReactMemo';

const Parent1 = () => {
  const [parentCounter, setParentCounter] = useState(2);

  const methodCalledFromChild = (value) => {
    console.log('methodCalledFromChild update');
    setParentCounter(value + 1);
    return value;
  };

  console.log('componet body re-rendered');
  //in this case methodCalledFromChild is not locked what it means it is being re-created
  //every time the component updates craating new reference in memory
  //useCallback() was locking it
  useMemo(() => methodCalledFromChild, [parentCounter]);

  return (
    <>
      <h2>{`This is parent Counter: ${parentCounter}`}</h2>
      <ChildComponentWithReactMemo
        methodCalledFromChild={methodCalledFromChild}
      />
    </>
  );
};

//useMemo always executes the function so it can not be used as useCallback()
//cause useCallback locks the function itself
//useMemo locks the value that is produces from executing the function
//so almost always will  have dependency on which function is being executed

//useMemo() IS PRETTY MUCH USED FOR OPTIMIZING
/*
    if you have heavy computation function U should wrap it in useMemo give it 
    dependency on which is should update only when dependency value changes

      useMemo(() => {}, [dependency]);
*/
{}
const runHeavyCalc =(data)=>{
  console.log('data 1')
 return {data}
}
const runHeavyCalc2 =(data)=>{
  console.log('data 2')
  return{data}
}
const Parent2 = () => {
  const [parentCounter, setParentCounter] = useState(2);
  const [data, setData] = useState(null);
  const [childCounter, setChildValue] = useState(2);

  /*
        useMemo — returns a memoized value,
        which helps avoiding expensive calculations on every render.
        It is usually related to the component is set to since the 
        function returns value so passing value does not do match for you 
  
  */

  //get data from API called only once (since an empty array)
  useEffect(() => {
    const data = {};
    setData(data);
  }, [parentCounter===10]);

  //make heavy computation based on data called on every render
  const result = runHeavyCalc(parentCounter);

  //make heavy computation based on data called on every render
  const result2 = useMemo(()=>runHeavyCalc2(parentCounter),[data]);

  return (
    <>
      <h2>{`This is parent Counter: ${parentCounter}`}</h2>
      <h2>{`This is child Counter: ${result}`}</h2>
      <h2>{`locked result: ${result2}`}</h2>
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
