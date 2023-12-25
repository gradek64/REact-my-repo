import { call, put, select } from 'redux-saga/effects';
import { GET_WALLET_SUCCESS, GET_WALLET_FAILURE } from '../../actions';
import api from '../../api';
//import api, { checkResponse } from '../../api';
import Logger from '../../utils/Logger';

export function* getWalletSaga(cookie) {
  try {
    const {
      customer: { id },
    } = yield select();

    const response = yield call(api.getWallet, id, cookie);
    //const wallet = yield call(checkResponse, response);
    //yield put(GET_WALLET_SUCCESS(wallet));
  } catch (error) {
    const { message, status, body = {} } = error;
    Logger.error({
      name: 'getWalletSaga',
      msg: 'Error getting wallet',
      detail: message,
      status,
      body,
    });
    yield put(GET_WALLET_FAILURE());
  }
}
