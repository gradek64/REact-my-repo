import React from 'react';
import { shallow } from 'enzyme';

// component for snapshot test;
import EnhancedList from '../../../functional/ListComponents/EnhancedList';

let wrapper;
beforeAll(() => {
  wrapper = shallow(<EnhancedList list={[
    { name: 'Gregi', side: 'noSide' },
    { name: 'Greg', side: 'dark' },
  ]}
  />);
});

test('renders correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('tranformProps gives back a correct Object', () => {
  // property name exist in the list
  expect(wrapper.prop('list')[0].name).toBeDefined();
  // property side exist in the list
  expect(wrapper.prop('list')[0].side).toBeDefined();
});
