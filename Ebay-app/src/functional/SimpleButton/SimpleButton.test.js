import React from 'react';
import { shallow } from 'enzyme';

import SimpleButton from './index';

test('renders correctly', () => {
  const wrapper = shallow(<SimpleButton label="label" eventHandler={() => {}} />);
  expect(wrapper).toMatchSnapshot();
});

test('button clicks and executed pass action method', () => {
  const actionCalled = jest.fn();
  const wrapper = shallow(<SimpleButton label="label" eventHandler={() => (actionCalled())} />);
  wrapper.find('input').simulate('click');

  // fucntion is called after click;
  expect(actionCalled).toHaveBeenCalledTimes(1);
});
