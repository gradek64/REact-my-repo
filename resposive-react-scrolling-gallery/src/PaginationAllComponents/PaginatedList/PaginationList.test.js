import React from 'react';
import { shallow } from 'enzyme';
import PaginationList from './index';

const props = {
  startFrom: 0,
  paginateBy: 4,
  list: [
    {
      _id: '593e9297e17df20c4a237d42',
      index: 0,
      price: 937180,
      picture: 'images/tn_property01.jpg',
      city: 'Singer',
      address: '914 Argyle Road Alley',
      latitude: -33.944576,
      longitude: 151.25584,
      bedrooms: 2,
      bathrooms: 2,
      carSpaces: 2,
    },
    {
      _id: '593e9297ec4cca9c56bf61af',
      index: 1,
      price: 703725,
      picture: 'images/tn_property02.jpg',
      city: 'Machias',
      address: '255 Raleigh Place',
      latitude: -33.944471,
      longitude: 151.2541,
      bedrooms: 2,
      bathrooms: 1,
      carSpaces: 0,
    }],
  children: {},
};

test('renders correctly', () => {
  const wrapper = shallow(<PaginationList {...props} />);
  expect(wrapper).toMatchSnapshot();
});
