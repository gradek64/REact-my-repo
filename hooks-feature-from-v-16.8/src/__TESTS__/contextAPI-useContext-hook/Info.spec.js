import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContextAPI from '../../contextAPI-useContext-hook';

//import child testing component
import Info from '../../contextAPI-useContext-hook/Info';
//import data used in context < <Context.Provider>
import { initialList } from '../../contextAPI-useContext-hook/index';
//import context
import { SectionContext } from '../../contextAPI-useContext-hook/index';

//=========================================================
// in order to test useContext() hook you need to provide
// context that comes from parent component
// also data  has to be the same as used in parent component
//=========================================================

/**
 * order of action:
 *
 * @1 import testing child component <Info />
 * @2 import data used in parent component {initialList}
 * @3 import context from React  export const SectionContext = React.createContext();
 * @4 wrap child component into Context
 * @5 skip parent from rendering since if you do it will render all children
 *    from context, but we only intrested in <Info /> child component
 * @6 to fail a test change data in original component what will affect snaposhot
 *    for <Info> component
 */
const { items } = initialList;

it('Context value is updated by child component', () => {
  const ComponentWithContext = () => (
    //<InfoParent> parent not need since it will render all children
    //not just <Info /> tested component
    <SectionContext.Provider value={{ list: { items } }}>
      <Info />
    </SectionContext.Provider>
    // </InfoParent>
  );
  const { asFragment } = render(<ComponentWithContext />);
  expect(asFragment(<ComponentWithContext />)).toMatchSnapshot();
});
