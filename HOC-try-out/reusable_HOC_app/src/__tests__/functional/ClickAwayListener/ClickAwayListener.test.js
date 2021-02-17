import React from 'react';
import { shallow } from 'enzyme';

import ClickAwayListener from '../../../functional/ClickAwayListener';

test('renders correctly', () => {
  const wrapper = shallow(<ClickAwayListener clickAway={() => {}} />);
  expect(wrapper).toMatchSnapshot();
});

const promise = () => new Promise((resolve) => { setTimeout(() => { resolve('done'); }, 1000); });
test('disapear', async () => {
  const callback = jest.fn();
  const wrapper = shallow(<ClickAwayListener clickAway={() => { callback(true); }} />);

  wrapper.find('.pageMask').simulate('click');
  /*
    *@Idealy U want to test if <div class=pageMask /> after click
    *@disapears but it dooent happen in this component so not likely testable
  */
  await promise().then((res) => {
    console.log('promise resolved');
  });
  // you can click if you clickAway prop method has been called after div click;
  expect(callback).toHaveBeenCalledWith(true);
});
