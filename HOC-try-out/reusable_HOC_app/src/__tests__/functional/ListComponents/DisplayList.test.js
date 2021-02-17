import React from 'react';
import { shallow } from 'enzyme';

// component for snapshot test;
import DisplayList from '../../../functional/ListComponents/DisplayList';

let wrapper;
beforeAll(() => {
  wrapper = shallow(<DisplayList list={
    [
      { name: 'Greg', side: 'dark' },
      { name: 'Greg', side: 'light' },
    ]
  }
  />);
});

test('renders correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

// test props
test('list has to render side:dark or side:light', () => {
  const elDomTree = wrapper.debug();
  const hasSideDark = /dark/gi.test(elDomTree);
  const hasSideLigth = /light/gi.test(elDomTree);
  expect(hasSideDark && hasSideLigth).toBe(true);
});
