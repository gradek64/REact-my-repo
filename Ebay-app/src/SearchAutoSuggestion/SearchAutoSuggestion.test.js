import React from 'react';
import { mount } from 'enzyme';
// import axios from 'axios';

import SearchAutoSuggestion from './index';

const props = {
  submitHandler: () => {},
  searchBoxRef: React.createRef(),
};
const wrapper = mount(<SearchAutoSuggestion {...props} />);

test('renders correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('renders suggestions list once state is fed', () => {
  expect(wrapper.find('ul')).toHaveLength(0);
  const suggestions = ['one', 'two'];
  wrapper.setState({ suggestions });
  expect(wrapper.find('ul.autocomplete-items')).toHaveLength(1);
});

test('onInput change calls axios and feeds suggestions state', () => {
  const wrapper0 = mount(<SearchAutoSuggestion {...props} />);

  // simulate onInput event
  const actualInput = wrapper0.find('input#results');
  // jest.mock('axios');
  // simulate input event
  // actualInput.simulate('input', { target: { value: 'Greg' } });
  wrapper0.instance().onInputHandler({ target: { value: 'Greg' } });
  // axios.get.mockResolvedValue(resp);
  /* axios.get = jest.fn(x => Promise.resolve(x));

  axios.get(2).then((data) => {
    expect(data).toBe(2);
  }); */

  // this only will work if you execute this function() it wont detect when event id dispached or any event callback
  // expect(wrapper1.instance().onInputHandler).toHaveBeenCalled();
});

test('it changes the serach box value on arrow down', () => {
  wrapper.setState({ suggestions: ['one', 'two'] });
  // very useful to see the structure of the wrapper component
  // console.log(wrapper.debug());

  // input value is kepth in React.ref();
  const serachBox = wrapper.props().searchBoxRef.current;
  // press arrow donw key on input itself not ref;
  const actualInput = wrapper.find('input#results');
  actualInput.simulate('keydown', { key: 'ArrowDown' });
  expect(serachBox.value).toBe('one');

  // one more key down
  actualInput.simulate('keydown', { key: 'ArrowDown' });
  expect(serachBox.value).toBe('two');
});

test('it changes the serach box value on arrow down and clear suggestions on Enter key down', () => {
  /*
    this test goes into steps so it is sort of small intergration test
    it would be possible to achieve this breaking into smaller tests outside context
    but it wont be much or readiblity so this intgragtion is better approach
  */


  // wrapper needs to be reset to basic one not affected but previous tests;
  const wrapper1 = mount(<SearchAutoSuggestion {...props} />);
  wrapper1.setState({ suggestions: ['one', 'two'] });
  // input value is kepth in React.ref();
  const serachBox = wrapper1.props().searchBoxRef.current;
  // press arrow donw key on input itself not ref;
  const actualInput = wrapper1.find('input#results');
  actualInput.simulate('keydown', { key: 'ArrowDown' });
  expect(serachBox.value).toBe('one');

  // on Enter key down clears the suggestions list
  actualInput.simulate('keydown', { key: 'Enter' });
  expect(wrapper1.find('ul.autocomplete-items')).toHaveLength(0);
});

test('it changes the serach box value on arrow up and clear suggestions on Enter key down', () => {
  // wrapper needs to be reset to basic one not affected but previous tests;
  const wrapper1 = mount(<SearchAutoSuggestion {...props} />);
  wrapper1.setState({ suggestions: ['one', 'two'] });
  // input value is kepth in React.ref();
  const serachBox = wrapper1.props().searchBoxRef.current;
  // press arrow donw key on input itself not ref;
  const actualInput = wrapper1.find('input#results');
  actualInput.simulate('keydown', { key: 'ArrowUp' });
  expect(serachBox.value).toBe('one');

  // on Enter key down clears the suggestions list
  actualInput.simulate('keydown', { key: 'Enter' });
  expect(wrapper1.find('ulautocomplete-items')).toHaveLength(0);
});

test('it changes the serach box value on mouse enter', () => {
  // wrapper needs to be reset to basic one not affected but previous tests;
  const wrapper2 = mount(<SearchAutoSuggestion {...props} />);
  wrapper2.setState({ suggestions: ['one', 'two'] });
  // input value is kepth in React.ref();
  const serachBox = wrapper2.props().searchBoxRef.current;
  // suggestion list
  const suggestionsList = wrapper.find('ul.autocomplete-items');
  const firstItemList = suggestionsList.find('li').at(1);

  // on mouseEnter with event object any has to be defined' on second element
  firstItemList.simulate('mouseenter', { b: 'any' });
  expect(serachBox.value).toBe('two');
});

test('it clears the list on any document element click', () => {
  // wrapper needs to be reset to basic one not affected but previous tests;
  const wrapper3 = mount(<SearchAutoSuggestion {...props} />);
  wrapper3.setState({ suggestions: ['one', 'two'] });

  // simulate click on document
  const bodyElement = document.getElementsByTagName('body')[0];
  // use browser click feature
  bodyElement.click();
  expect(wrapper3.find('ulautocomplete-items')).toHaveLength(0);
});
