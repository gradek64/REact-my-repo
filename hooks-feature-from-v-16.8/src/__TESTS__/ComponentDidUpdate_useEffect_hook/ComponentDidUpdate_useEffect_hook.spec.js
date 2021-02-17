import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CounterComp from '../../ComponentDidUpdate_useEffect_hook';

describe('should render correclty with initial state', () => {
  afterEach(cleanup);
  it('should take a snapshot', () => {
    const { asFragment } = render(<CounterComp />);
    expect(asFragment(<CounterComp />)).toMatchSnapshot();
  });
});

describe('state response to clicks', () => {
  afterEach(cleanup);
  it('increments counter', () => {
    //use container cheaky way to have access to standard DOM selectors
    const { container } = render(<CounterComp />);
    const button1 = container.querySelectorAll('button')[0];
    fireEvent.click(button1);
    expect(container.querySelector('#display')).toHaveTextContent(
      'You clicked 1 times'
    );
  });
  it('runs and updates useEffect [count] state property', () => {
    //use container cheaky way to have access to standard DOM selectors
    const { container } = render(<CounterComp />);
    const button1 = container.querySelectorAll('button')[0];
    fireEvent.click(button1);
    expect(document.title).toBe('updated count state:1');
  });
});
