import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

const props = {
  index: 0,
  picture: 'images/tn_property01.jpg',
  city: 'Singer',
  address: '914 Argyle Road',
  bedrooms: 2,
  bathrooms: 2,
  carSpaces: 2,
};

test('renders correctly', () => {
  const wrapper = shallow(<Card {...props} />);
  expect(wrapper).toMatchSnapshot();
});
