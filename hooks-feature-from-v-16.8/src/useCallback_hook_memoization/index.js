import React, { useState, useCallback } from 'react';

//custom imports
import Button from './ButtonChild';
import Title from './TitleChild';

const ExampleClickUpdateMemoized = () => {
  /*
      by default with any hook any update to the internal hook state
      will cause re-render of all of the children

      But we can control that by:

      //for static components that just use props not state U should wrap them in react build-in HOC React.memo(Component)
      //that should stop static, presentional component to re-render

  */

  //----------------//

  /*  
 
  const [count, setCount] = useState(0);const [count, setCount] = useState(0);
  const [countInTens, increasebyTen] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const increment10 = () => {
    increasebyTen(count + 10);

  Above state management are never cached so react will rerender both even though only one will change

  means when you can count , countinTens metthod will re-render as well even though it hasnt changed
  */

  //the solution of that is to useCallback() wrap function as below

  //the useCallback hook is similar to the useMemo() hook
  //the diffrence is the useCallback can be used as a pointer in inline method as wrapper
  //wheras useMemo can not it needs to be set outside render function

  const [count, setCount] = useState(0);
  const [countInTens, increasebyTen] = useState(0);

  const increment10 = useCallback(() => {
    console.log('.....useCallback called for increment10.. method');
    increasebyTen(countInTens + 10);
  }, [countInTens]);

  return (
    <div>
      <Title title="useHook" />
      <p>{`You clicked ${count} times`}</p>
      <Button
        //useCallback directly used in render method
        increment={useCallback(() => {
          console.log('.....useCallback called for increment.. method');
          setCount(count + 1);
        }, [count])}
        forProp={'count'}
      >
        Click me up
      </Button>
      <p>{`You clicked countInTens: ${countInTens} times`}</p>
      <Button increment={increment10} forProp={'countInTens'}>
        Click me up in 10
      </Button>
    </div>
  );
};

export default ExampleClickUpdateMemoized;
