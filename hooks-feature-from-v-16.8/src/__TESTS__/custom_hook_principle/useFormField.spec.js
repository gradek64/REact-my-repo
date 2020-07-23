/* useFormField.test.js */

import React from 'react';
import { shallow } from 'enzyme';
import useFormField from '../../custom_hook_principle/useFormField';

//this is functional component
function HookWrapper({ customHook }) {
  return <div hook={customHook()} />;
}

describe('useFormField', () => {
  it('should set init value', () => {
    let wrapper = shallow(<HookWrapper customHook={() => useFormField('')} />);

    let { hook } = wrapper.props();
    console.log(wrapper.props());
    let [val, onChange, isValid] = hook;
    expect(val).toEqual('');

    wrapper = shallow(<HookWrapper customHook={() => useFormField('marco')} />);

    // destructuring objects - {} should be inside brackets - () to avoid syntax error
    ({ hook } = wrapper.props());
    [val, onChange, isValid] = hook;
    expect(val).toEqual('marco');
  });
  it('should set the right val value', () => {
    let wrapper = shallow(
      <HookWrapper customHook={() => useFormField('marco')} />
    );

    let { hook } = wrapper.props();
    let [val, onChange, isValid] = hook;
    expect(val).toEqual('marco');

    onChange({ target: { value: 'polo' } });

    ({ hook } = wrapper.props());
    [val, onChange, isValid] = hook;
    expect(val).toEqual('polo');
  });

  it('should set the right isValid value', () => {
    let wrapper = shallow(
      <HookWrapper customHook={() => useFormField('marco')} />
    );

    let { hook } = wrapper.props();
    let [val, onChange, isValid] = hook;
    expect(val).toEqual('marco');
    expect(isValid).toEqual(true);

    onChange({ target: { value: 'polo' } });

    ({ hook } = wrapper.props());
    [val, onChange, isValid] = hook;
    expect(val).toEqual('polo');
    expect(isValid).toEqual(true);

    onChange({ target: { value: '' } });

    ({ hook } = wrapper.props());
    [val, onChange, isValid] = hook;
    expect(val).toEqual('');
    expect(isValid).toEqual(false);
  });
});
