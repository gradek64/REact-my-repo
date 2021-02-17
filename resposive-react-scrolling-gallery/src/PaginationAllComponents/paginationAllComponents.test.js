import React from 'react';
import { shallow } from 'enzyme';
import Pagination from './Pagination';
// import hook function
import PagginationAllCompHook from './index';


// mock reack hook setState dont exist in Enzyme yet;
const setState = jest.fn();
const useStateSpy = jest.spyOn(React, 'useState');
useStateSpy.mockImplementation(init => [init, setState]);

/*
    hook can not be called just like normal functions (isolated from React)
    instead you need to wrap them into container
    and give prop hook that passes hook function itself;
*/
function HookWrapper(props) {
  const hook = props.hook ? props.hook() : undefined;
  return <div hook={hook} />;
}


test('should render correctly', () => {
  const wrapper = shallow(<HookWrapper hook={() => PagginationAllCompHook()} />);
  expect(wrapper).toMatchSnapshot();
});

it('should set init value and update setState', () => {
  const wrapper = shallow(<HookWrapper hook={() => PagginationAllCompHook()} />);

  // it only uses this next 2 lines below not needed yet it is a mock form Ract setState hook
  const setState = jest.fn((e) => { console.log('w', e); });
  /*  const useStateSpy = jest.spyOn(React, 'useState');
  useStateSpy.mockImplementation(init => [init, setState]);
  */

  // those are props send to the hook wrapper
  const { hook } = wrapper.find('div').props();

  /*
      first you need to render Pagination component since Hook component
      doesnt go that deep event with mount render;
  */
  const PaginatioWrapper = shallow(<Pagination howMany={2} eventHandler={setState} />);
  expect(PaginatioWrapper).toMatchSnapshot();

  // once you have access to pagination buttons you need to simulate click
  PaginatioWrapper.find('button').at(0).simulate('click');

  // then expect to change you hook state for example call setState with param = 0
  expect(setState).toHaveBeenCalledWith(0);

  // the same for the second button render from how many props
  PaginatioWrapper.find('button').at(1).simulate('click');

  // then expect to change you hook state for example call setState with param = 1
  expect(setState).toHaveBeenCalledWith(1);
});
