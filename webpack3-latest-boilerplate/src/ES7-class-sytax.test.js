import React from 'react';
import { shallow } from 'enzyme';

import ES7classsyntax from './ES7-class-syntax.js';

test('renders correctly', () => {
  const wrapper = shallow(<ES7classsyntax />);
  expect(wrapper).toMatchSnapshot();
});
