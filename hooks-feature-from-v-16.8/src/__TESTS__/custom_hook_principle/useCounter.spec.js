/* useCounter.test.js */
import { cleanup, renderHook, act } from '@testing-library/react-hooks';
import useCounter from '../../custom_hook_principle/useCounter';

//it needs react version at least 16.9.0
afterEach(cleanup);
describe('useCounter', () => {
  it('should set init value to 0 by default', () => {
    const { result } = renderHook(() => useCounter());
    const [count, ...rest] = result.current;

    expect(count).toBe(0);
  });
});
describe('increment', () => {
  it('should increment by 1', () => {
    const { result } = renderHook(() => useCounter(0));
    let [count, increment] = result.current;
    act(() => {
      increment();
    });
    //it needs to be reassign to get updated value
    [count] = result.current;
    expect(count).toBe(1);
  });
  it('should decrement by 1', () => {
    const { result } = renderHook(() => useCounter(10));
    const decrement = result.current[2];
    act(() => {
      decrement();
    });
    //it needs to be reassign to get updated value
    const [count] = result.current;
    expect(count).toBe(9);
  });
});
