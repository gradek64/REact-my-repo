import React from 'react';
import { shallow } from 'enzyme';
import CardsContainer from './CardsContainer';
import data from '../../data/data';

// needed to be mocked to make enviroment for a windows.matchMedia
// import matchMedia from './_mock_media_listener';

const { items } = data;


/*
  FIXED DATA
  change if component changes
*/
const showFrontImages = 4;

const wrapper = shallow(<CardsContainer />);
// U need to give this value to state due to lag in loading this exernally;
// this is fixed and it has to be the same in component change to that will mess up your tests
wrapper.setState({ showFrontImagesNumber: showFrontImages });
test('renders correctly', () => {
  expect(wrapper).toMatchSnapshot();
});


test('increase index on click next', () => {
  const next = wrapper.find('button').first();
  // whole structure
  // console.log(wrapper.instance());
  // DOMe element structure
  // console.log(next.html());

  // get current state property;
  // console.log(wrapper.state().index);
  const currentIndex = wrapper.state().index;
  // click next
  next.simulate('click');
  expect(wrapper.state().index).toBe(currentIndex + 1);
});

test('decrease index on click prev', () => {
  const prev = wrapper.find('button').at(1);
  // set index to 5;
  wrapper.setState({ index: 5 });
  const currentIndex = wrapper.state().index;
  // click next
  prev.simulate('click');
  expect(wrapper.state().index).toBe(currentIndex - 1);
});

test('prev button disbale on index===0 and enabled if index!==0', () => {
  // set index to 0;
  wrapper.setState({ index: 0 });
  const prev = wrapper.find('button').at(1);
  // props of enzyme child
  // console.log(prev.props());
  expect(prev.props().disabled).toBe(true);
  // set index to 1;
  wrapper.setState({ index: 1 });
  const prevChange = wrapper.find('button').at(1);
  expect(prevChange.props().disabled).toBe(false);
});

test('next button disbale on index===items.length and enabled if index!==items.length', () => {
  // set index to 0 items are already there and showFrontImagesNumber as well no need to set up ;
  wrapper.setState({ index: 20 });
  const next = wrapper.find('button').first();
  // wrapper.update();
  expect(next.props().disabled).toBe(false);
  // change index with callback optional no diffrence I think
  wrapper.setState({
    index: items.length - wrapper.state().showFrontImagesNumber,
  },
  () => {
    // U DONT NEED TO UPDATE WRAPPER IT WONT SEE CHANGES
    // wrapper.update();
    const nextUpate = wrapper.find('button').first();
    expect(nextUpate.props().disabled).toBe(true);
  });
});

test('it start timer when props timer=true is set', () => {
  const timerSet = shallow(<CardsContainer timer />);
  expect(timerSet.state().setTimer).toBe(true);
});

test('should cancel timer once next button clicked with event', () => {
  const timerSet = shallow(<CardsContainer timer />);
  // click action on next
  timerSet.find('button').first().simulate('click', { e: 'set' });
  expect(timerSet.state().setTimer).toBe(false);
});

test('should cancel timer once prev button clicked with event', () => {
  const timerSet = shallow(<CardsContainer timer />);
  // click action on next
  timerSet.find('button').at(1).simulate('click', { e: 'set' });
  expect(timerSet.state().setTimer).toBe(false);
});
