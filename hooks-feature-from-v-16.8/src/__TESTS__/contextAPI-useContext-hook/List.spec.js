import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContextAPI from '../../contextAPI-useContext-hook';

//import child testing component
import List from '../../contextAPI-useContext-hook/ListHookedToLocalRedux';
//import data used in context < <Context.Provider>
//import { initialList } from '../../contextAPI-useContext-hook/index';
import ListParent, {
  initialList,
} from '../../contextAPI-useContext-hook/index';
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
 * @1 import testing child component <List />
 * @2 import data used in parent component {initialList}
 * @3 import context from React  export const SectionContext = React.createContext();
 * @4 wrap child component into Context
 * @5 skip parent from rendering since if you do it will render all children
 *    from context, but we only intrested in <Info /> child component
 * @6 to fail a test change data in original component what will affect snaposhot
 *    for <Info> component
 */
const { items } = initialList;
describe('with mock Provider', () => {
  let ComponentWithContext;
  let dispatchAction = jest.fn();
  beforeEach(() => {
    ComponentWithContext = () => (
      //<InfoParent> parent not need since it will render all children
      //not just <List /> tested component
      <SectionContext.Provider value={{ list: { items }, dispatchAction }}>
        <List />
      </SectionContext.Provider>
      // </InfoParent>
    );
  });
  //important to clean afger every test!
  afterEach(cleanup);
  describe('snapshot for <List Component', () => {
    it('it renders List component correctlly', () => {
      const { asFragment } = render(<ComponentWithContext />);
      expect(asFragment(<ComponentWithContext />)).toMatchSnapshot();
    });
  });

  describe('mock events', () => {
    it('calls dispatchAction on first button click', () => {
      /**
       *
       * @usage: going by the first apprach 'mock provider'
       * we can mock dispach method given from context and
       * chack if our method has been fired with function argms
       * set in original imlementation as below
       **/

      const { container } = render(<ComponentWithContext />);
      const bttn1 = container.querySelectorAll('button')[0];
      fireEvent.click(bttn1);
      expect(dispatchAction).toHaveBeenCalledWith({
        type: 'REMOVE_ITEM',
        title: items[0].title,
      });
    });
  });
});

/**
 *
 * @usage: another approuch is to not mock it at all and just parentContainer
 * which keeps all context and just does his job just like in application
 * not provider needs test will use just functionallity of <Context.Provider>
 * form parent Component
 *
 *
 **/

describe('events', () => {
  it('Context value is updated by child component', () => {
    /**
     *
     * we could just test if something has been called but
     * I think is better to check if any changes to content change
     * after click not just check if something has been called ?
     *
     *
     **/
    let { container } = render(<ListParent />);
    let allBttns = container.querySelectorAll('button').length;
    const listLength = items.length;
    expect(allBttns).toEqual(listLength);

    //click on first button
    const bttn1 = container.querySelectorAll('button')[0];
    fireEvent.click(bttn1);
    ({ container } = render(<ListParent />));
    expect(container.querySelectorAll('button').length).toEqual(listLength - 1);

    //click on first button after romovale of first one iniatially
    //needs re-render
    const next1 = container.querySelectorAll('button')[0];
    fireEvent.click(next1);
    ({ container } = render(<ListParent />));
    expect(container.querySelectorAll('button').length).toEqual(listLength - 2);
  });
});
