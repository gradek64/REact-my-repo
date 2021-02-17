import React from 'react';
import { shallow } from 'enzyme';

import SearchBox from '../../../functional/SearchBox';

test('renders correctly', () => {
  const wrapper = shallow(<SearchBox eventHandler={() => {}} />);
  expect(wrapper).toMatchSnapshot();
});

test('key press passes action method', () => {
  const eventHandlerCalled = jest.fn();

  const value = 'myValue';
  const wrapper = shallow(<SearchBox
    label="label"
    // e below is not a real event so if you need to use e.target.value you need to mock it
    eventHandler={e => (eventHandlerCalled(value))}
  />);

  // here we simulate onInput that needs to have event.target.value arg so we do;
  wrapper.find('input').at(0).simulate('input', { target: { value } });

  // fucntion is called after click;
  expect(eventHandlerCalled).toHaveBeenCalledWith(value);
});
