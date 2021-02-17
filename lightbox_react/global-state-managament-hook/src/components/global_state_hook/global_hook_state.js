import { useState, useEffect } from 'react';

let listeners = [];
let state = { open: false, modalID: '' };

//this funciton is responsible for change global state
//it is exposed to call it directly without the hook
//it is not called on initial render only on hook state change
export const setState = ({ open, modalID }) => {
  state = { ...state, open, modalID };
  console.log('state', state);
  console.log('listeners', listeners);
  listeners.forEach((listener) => {
    listener(state);
  });
};

//higer order hook that internally using useState()
//it is abstraction for  useState() wrappes and returns hook
const useStateGlobal = () => {
  //ideally U want to register listener just once but hook needs to be
  //in component/function body so it can not be in useEffect() hook

  /*------------ IMPORATANT ------------------

  useState() is the only way to render component that 
  uses useStateGlobal()

  const [state, internalFN] = useStateGlobal();
    newlistener === internalFN

  --------------- IMPORATANT ----------------- */

  const newListener = useState()[1];

  //this useEffect mount will occur for every component
  //that uses useCustom() hook
  useEffect(() => {
    // Called just after component mount
    listeners.push(newListener);
    console.log('called once');
    return () => {
      // Called just before the component unmount
      listeners = listeners.filter((listener) => listener !== newListener);
      console.log('dismounted');
    };
  }, []);
  return [state, setState];
};

export default useStateGlobal;
