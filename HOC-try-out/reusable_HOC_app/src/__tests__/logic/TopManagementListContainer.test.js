import React from 'react';
import { shallow } from 'enzyme';
import TopManagementListContainer from '../../logic/TopManagementListContainer';
import { noReactFragementSupport } from '../../test_helpers';

const starWarsChars = [
  { name: 'Luke', side: 'light' },
  { name: 'Darth Vader', side: 'dark' },
];

let wrapper;
beforeAll(() => {
  wrapper = shallow(<TopManagementListContainer list={starWarsChars} />);
});

test('It renders correctly', () => {
  // const wrapperUpdate = noReactFragementSupport(wrapper.debug());
  expect(wrapper).toMatchSnapshot();
});

/*
  *@testing class methods by calling them
  *@directly U dont need to know how and who is calling them in first place
  as buttons, events etc...
*/

test('updates state after calling searchText method', () => {
  // const wrapperUpdate = noReactFragementSupport(wrapper.debug());
  const value = 'V';
  // test classInstance.searchText();
  wrapper.instance().searchText(value);

  const updatedState = wrapper.instance().state;
  expect(updatedState.searchValue).toBe('v');
  expect(updatedState.action).toBe('search');
});

test('updates state after calling sortBy method', () => {
  // test classInstance.sortBy();
  let side = 'ASC';
  wrapper.instance().sortBy(side);

  const updatedState = wrapper.instance().state;
  expect(updatedState.sortBy).toBe(side);
  expect(updatedState.action).toBe('sortBy');

  side = 'DESC';
  wrapper.instance().sortBy(side);

  const updatedStateFilter = wrapper.instance().state;
  expect(updatedStateFilter.sortBy).toBe(side);
  expect(updatedStateFilter.action).toBe('sortBy');
});

test('updates state after calling filterSide method', () => {
  // test classInstance.filerSide();
  let side = 'dark';
  wrapper.instance().filterSide(side);

  const updatedState = wrapper.instance().state;
  expect(updatedState.filter).toBe(side);
  expect(updatedState.action).toBe('filter');

  side = 'light';
  wrapper.instance().filterSide(side);

  const updatedStateFilter = wrapper.instance().state;
  expect(updatedStateFilter.filter).toBe(side);
  expect(updatedStateFilter.action).toBe('filter');
});

/*
  *@U can also test if you render jsx has change after state change
  *@enzyme comes with wrapper.update() and re-renders the jsx again
*/
test('It changes render outcome once filter is changed', () => {
  wrapper.update();
  expect(wrapper.find('h1').at(0).text()).toEqual('active filter: light');
  expect(wrapper.find('h1').at(1).text()).toEqual('active sortBy: DESC');
});

