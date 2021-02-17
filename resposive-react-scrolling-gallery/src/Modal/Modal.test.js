import React from 'react';
import { shallow } from 'enzyme';

import Modal from './index';

const props = {
  eventOn: 'ON_EVENT_ON',
  children: 'that could be any type',
};

const wrapper = shallow(<Modal {...props} />);
test('renders correctly with props given', () => {
  expect(wrapper).toMatchSnapshot();
});

test('it opens and changes state open = true', () => {
  // expect modal to be close initially;
  expect(wrapper.instance().state.open).toBe(false);
  // call class method openModal
  wrapper.instance().openModal();
  // expect to be open now
  expect(wrapper.instance().state.open).toBe(true);
});

test('it closes and changes state open = false', () => {
  // force initial state open=true cause default is false;
  wrapper.setState({ open: true });
  // call class method openModal
  wrapper.instance().closeModal({ type: 'none' });
  // expect to be closed now
  expect(wrapper.instance().state.open).toBe(false);
});

test('it closes on keydown ESC but stays on any other keydown', () => {
  // force initial state open=true cause default is false;
  wrapper.setState({ open: true });

  // call class method openModal
  wrapper.instance().closeModal({ type: 'keydown', key: 'K' });
  // expect to be still open
  expect(wrapper.instance().state.open).toBe(true);

  wrapper.instance().closeModal({ type: 'keydown', key: 'Escape' });
  // expect to be closed
  expect(wrapper.instance().state.open).toBe(false);
});

