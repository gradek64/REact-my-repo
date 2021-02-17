import React, { useState } from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CounterComp from '../../ComponentDidUnmount_useEffect_hook';

describe('should render correclty with initial state', () => {
  afterEach(cleanup);
  it('should take a snapshot', () => {
    const { asFragment } = render(<CounterComp />);
    expect(asFragment(<CounterComp />)).toMatchSnapshot();
  });
});

describe('hook will unmount', () => {
  it('it should unmount', () => {
    const { container, unmount } = render(<CounterComp />);
    unmount();
    expect(container.innerHTML.length).toBe(0);
  });
});
