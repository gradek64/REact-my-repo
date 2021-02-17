import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { shallow } from 'enzyme';

import '@testing-library/jest-dom/extend-expect';

//import parent used in context < <Context.Provider>
import ParentContextComp from '../../contextAPI-useContext-hook/index';

it('Context value is updated by child component', () => {
  /**
   *
   * @usage: this time ezyme has an advantage cause we dont want to deep render
   * cause it will affect our children
   * we want to track in children test how do they render not in the parent ;)
   **/
  const wrapper = shallow(<ParentContextComp />);
  expect(wrapper).toMatchSnapshot();

  //from testing library it used deep render as Enzyme mount
  /* const { asFragment } = render(<ParentContextComp />);
  expect(asFragment(<ParentContextComp />)).toMatchSnapshot(); */
});
