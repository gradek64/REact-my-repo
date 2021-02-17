import React from 'react';
// full render needed
import { mount } from 'enzyme';

/*
  *@this next line is defined in a root/jest.configuration.js
  *@so no need to import library
*/
// import toJson from 'enzyme-to-json';

// component for snapshot test;
import DropDown from '../../../functional/DropDown';

function DropDownContentExample() {
  return (<div className="DropDownContent"><button>1</button><button>2</button></div>);
}

/*
  *@DropDown component needs children prop as required the way is provided is
  *@simply put JSX content between <DropDown>{props.children}</DropDown>
*/

let wrapper;
beforeAll(() => {
  wrapper = mount(<DropDown label="DropDown"><DropDownContentExample /></DropDown>);
});

test('renders correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('changes toggle after SimpleButton click', () => {
  const SimpleButton = wrapper.find('SimpleButton').find('button');
  // before
  expect(wrapper.find('DropDownContentExample').length).toBe(0);

  SimpleButton.simulate('click');
  // re-render component from Enzyme;
  wrapper.update();

  expect(wrapper.find('DropDownContentExample').length).toBe(1);
});

/*
  *@Test work in sequance that means changes from previous test will pass
  *@to next text , therefore our DropDown content is present for next text;
*/

test('DropDown goes away once content is clicked', () => {
  // quick assertion to prove comment above;
  expect(wrapper.find('DropDownContentExample').length).toBe(1);

  wrapper.find('DropDownContentExample').simulate('click');
  // update compoent;
  wrapper.update();
  // no more DropDownContentExample;
  expect(wrapper.find('DropDownContentExample').length).toBe(0);
});
