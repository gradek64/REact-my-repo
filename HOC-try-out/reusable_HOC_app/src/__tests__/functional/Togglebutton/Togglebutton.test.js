import React from 'react';
// full render needed
import { mount } from 'enzyme';

/*
  *@this next line is defined in a root/jest.configuration.js
  *@so no need to import library
*/
// import toJson from 'enzyme-to-json';

// component for snapshot test;
import ToggleButton from '../../../functional/Togglebutton';

let wrapper;
beforeAll(() => {
  wrapper = mount(<ToggleButton
    action={() => {}}
    label="sort"
    toggleLabels={['ASC', 'DESC']}
    values={['sortASC', 'sortDESC']}
  />);
});

test('renders correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('It has SimpleButton component rendered', () => {
  expect(wrapper.find('SimpleButton').length).toBe(1);
});

test('it changes SimpleButton label once clicked', () => {
  // [ 'ASC', 'DESC' ]
  const labelsProps = wrapper.find('ToggleSimpleButton').prop('toggleLabels');

  // button clicked
  const SimpleButton = wrapper.find('SimpleButton');
  SimpleButton.find('button').simulate('click');
  // changes to ASC
  const expectedLabel = `sort ${labelsProps[1]}`;
  // expect label change
  expect(SimpleButton.prop('label')).toBe(expectedLabel);
});

test('it changes SimpleButton label back on once clicked', () => {
  // [ 'ASC', 'DESC' ]
  const labelsProps = wrapper.find('ToggleSimpleButton').prop('toggleLabels');

  // button clicked
  const SimpleButton = wrapper.find('SimpleButton');
  SimpleButton.find('button').simulate('click');
  // changes to ASC
  const expectedLabel = `sort ${labelsProps[0]}`;
  // expect label change
  expect(SimpleButton.prop('label')).toBe(expectedLabel);
});
