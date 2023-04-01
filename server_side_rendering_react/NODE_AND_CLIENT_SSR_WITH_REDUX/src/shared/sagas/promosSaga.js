import { call, put, select, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { SagaIterator } from 'redux-saga';

import { ADD_PROMO, DELETE_PROMO } from '../Redux/actions/promotions';

/**
 * Calls add payment API with selected payment method.
 * @param {Object} action - addPayment action
 * @param {Object} action.payload - Action payload
 * @param {string} action.payload.reference - Promo reference
 * @param {function} action.payload.onSuccess - Function to run after add promo response is successful
 * @param {function} action.payload.onFailure - Function to run after add promo response is unsuccessful
 * @returns {string|object} promo reference on success and null on failure
 */

export function* addPromoSaga() {
  try {
    const store = yield select();

    console.log('current store before action completed', store);

    return store;
  } catch (_untypedError) {
    return null;
  }
}

export function* deletePromoSaga() {
  try {
    const store = yield select();

    console.log('current store before action completed', store);

    return store;
  } catch (_untypedError) {
    return null;
  }
}

export function* watchAddPromo() {
  yield takeLatest(ADD_PROMO, addPromoSaga);
}

export function* watchDeletePromo() {
  yield takeLatest(DELETE_PROMO, deletePromoSaga);
}
