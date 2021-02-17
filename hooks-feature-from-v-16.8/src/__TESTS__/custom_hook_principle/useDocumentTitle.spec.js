/* useDocumentTitle.test.js */

import React from 'react';
import { shallow } from 'enzyme';
import useDocumentTitle from '../../custom_hook_principle/useDocumentTitle';

/**
 *
 * @usage:
 *   every hook has to work inside functional component to work therefore
 *   custom hook that only extract logic needs to be wrapped in functional component
 *   in order to test them.
 *
 **/

function HookWrapper(props) {
  const hook = props.customHook ? props.customHook() : undefined;
  //return jsx div component
  return <div count={hook} />;
}

it('should set document.title to initial value', () => {
  const initialValue = 10;
  let wrapper = shallow(
    <HookWrapper customHook={() => useDocumentTitle(initialValue)} />
  );
  const { count } = wrapper.props('count');
  const [backValue] = count;
  expect(backValue).toBe(10);
});
