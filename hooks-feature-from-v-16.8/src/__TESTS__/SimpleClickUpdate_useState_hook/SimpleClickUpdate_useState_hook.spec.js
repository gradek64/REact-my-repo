import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CounterComp from '../../SimpleClickUpdate_useState_hook';

describe('should render correclty with initial state', () => {
  afterEach(cleanup);
  it('should take a snapshot', () => {
    const { asFragment } = render(<CounterComp />);
    expect(asFragment(<CounterComp />)).toMatchSnapshot();
  });

  it('initial state should be zero (0)', () => {
    /**
     *
     * @usage: getByTestId is set in jsx as
     *  <p data-testid="counter">{`You clicked ${count} times`}</p>
     **/
    const { getByTestId } = render(<CounterComp />);
    expect(getByTestId('counter')).toHaveTextContent('You clicked 0 times');
  });
});

describe('state response to clicks', () => {
  afterEach(cleanup);
  it('increments counter', () => {
    //use container cheaky way to have access to standard DOM selectors
    const { container } = render(<CounterComp />);
    const button1 = container.querySelectorAll('button')[0];
    console.log('container', container.querySelectorAll('button'));
    fireEvent.click(button1);
    expect(container.querySelector('#display')).toHaveTextContent(
      'You clicked 1 times'
    );
  });
  fit('decrements counter', () => {
    //use container cheaky way to have access to standard DOM selectors
    const { container } = render(<CounterComp />);
    const button2 = container.querySelectorAll('button')[1];
    fireEvent.click(button2);
    expect(container.querySelector('#display')).toHaveTextContent(
      'You clicked -1 times'
    );
  });
});
