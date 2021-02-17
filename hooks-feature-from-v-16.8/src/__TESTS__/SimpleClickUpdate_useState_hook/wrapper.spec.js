import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom/extend-expect';
import CounterComp from '../../SimpleClickUpdate_useState_hook';

describe('state response to clicks', () => {
  it('increments counter', () => {
    let wrapper = shallow(<CounterComp />);
    const button1 = wrapper.find('button').at(0);
    button1.simulate('click');
    const outcome = wrapper.find('#display').text();
    expect(outcome).toBe('You clicked 1 times');
  });
  it('decrements counter', () => {
    let wrapper = shallow(<CounterComp />);
    const button2 = wrapper.find('button').at(1);
    //console.log(wrapper.debug());
    button2.simulate('click');
    //console.log(wrapper.debug());
    const outcome = wrapper.find('#display').text();
    expect(outcome).toBe('You clicked -1 times');
  });
});
