import React, { useReducer, useContext } from 'react';
import List from './ListHookedToLocalRedux';
import { listReducer } from './listReducer';
import Info from './Info';

/*
      Context provides a way to pass data through the component tree

      without having to pass props down manually at every level

      --React quatation

      1. create context
      2. <Context>...</Context> wrappet text a value as prop with initial object to be shared
      2a. It is common use to give initial context value from useReducer() hook

*/
//needs to export for testing and accesiblity reason;
export const initialList = {
  items: [
    { title: 'title1' },
    { title: 'title2' },
    { title: 'title3' },
    { title: 'title4' },
    { title: 'title5' },
  ],
  greg: 'is so cool',
};

// create context that would wrap all children components ang give access to context valuse
// it needs to be exported since other component have to have acccess to it by importing it
export const SectionContext = React.createContext();
const { Provider } = SectionContext;

const AppLocalRedux = () => {
  // this is same as useState but with state management as redux will do
  const [list, dispatchAction] = useReducer(listReducer, initialList);

  return (
    <div style={{ border: '1px dashed blue' }}>
      {/* we have wrapper that provides state distribution in a value prop */}
      <Provider value={{ list, dispatchAction }}>
        {/* Notice bellow components dont have props they receive data by context wrapper */}
        {/* props are encapsulated in value object which has dispatchAction method and list */}
        <Info />
        <List />
      </Provider>
    </div>
  );
};

export default AppLocalRedux;
