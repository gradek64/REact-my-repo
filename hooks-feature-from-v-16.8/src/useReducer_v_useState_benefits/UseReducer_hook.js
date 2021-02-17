import React, { useReducer, useEffect } from 'react';

// Action Types
const INCREMENT = 'INCREMENT';
const SET_FROZEN = 'SET_FROZEN';

/**
 *
 * this example combines all logic in one thefore all is kept in one object
 * that keeps entire state, no issues with updating one property to another, every update
 * updates entire object and keeps the previous properties (Object.assign() or descructiring)
 *
 **/

const countReducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      if (state.frozen) {
        return state;
      }
      return {
        ...state,
        count: state.count + 1,
      };
    case SET_FROZEN:
      return {
        ...state,
        frozen: action.frozen,
      };
    default:
      return state;
  }
};

const ReducerCounter = () => {
  let [state, dispatch] = useReducer(countReducer, {
    count: 0,
    frozen: false,
  });

  useEffect(() => {
    dispatch({ type: INCREMENT });
    dispatch({
      type: SET_FROZEN,
      frozen: true,
    });
    dispatch({ type: INCREMENT });
  }, []);

  return (
    <>
      <h2>useReducer example compare</h2>
      <div>{state.count}</div>
    </>
  );
};

export default ReducerCounter;
