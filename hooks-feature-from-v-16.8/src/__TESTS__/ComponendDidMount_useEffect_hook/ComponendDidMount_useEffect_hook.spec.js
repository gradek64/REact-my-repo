import React, { useState } from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CounterComp from '../../ComponendDidMount_useEffect_hook';

describe('should render correclty with initial state', () => {
  afterEach(cleanup);
  it('should take a snapshot', () => {
    const { asFragment } = render(<CounterComp />);
    expect(asFragment(<CounterComp />)).toMatchSnapshot();
  });
});

describe('component mouted for the first time', () => {
  it('document title should say zero (0)', () => {
    expect(document.title).toBe('0');
  });
});
