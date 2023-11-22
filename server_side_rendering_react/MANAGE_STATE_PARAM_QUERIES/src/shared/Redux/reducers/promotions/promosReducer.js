import { createReducer } from '@reduxjs/toolkit';

import { ADD_PROMO, DELETE_PROMO } from '../../actions/promotions';

export const initialState = {
  counter: 0,
};

const promosReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(ADD_PROMO, (state) => {
      state.counter += 1;
    })
    .addCase(DELETE_PROMO, (state) => {
      state.counter -= 1;
    })
);

export default promosReducer;
