import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import { LikesButton } from '../scripts/LikeCounter';

Enzyme.configure({ adapter: new EnzymeAdapter() });
const mockProps = {
  id: 1
};
const setup = (props = { ...mockProps }, state = null) => {
  const wrapper = shallow(<LikesButton {...props} />);
  if (state) {
    wrapper.setState(state);
  }
  return wrapper;
};

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test('renders without erorr', () => {
  const mainComponent = setup();
  const appComponent = findByTestAttr(mainComponent, 'LikesButton-component');
  expect(appComponent.length).toBe(1);
});

test('check initial state', () => {
  const wrapper = setup();
  const initialState = wrapper.state('likes');
  expect(initialState).toBe(0);
});

test('clicking LikesButton incremeants display', () => {
  const likes = 5;
  const wrapper = setup(mockProps, { likes });
  const button = findByTestAttr(wrapper, 'LikesButton-component');
  console.log('before button.text', wrapper.state());
  button.simulate('click');
  const view = wrapper.find('h1');
  wrapper.update();
  console.log('button.text', wrapper.state());
  console.log('button.text', view.text());
  expect(view.text()).toContain(likes + 1);
  // to cotain means you dont need to pass entire string it will check the bit you want
  return;
  expect(button.text()).toContain(counter + 1);
});
