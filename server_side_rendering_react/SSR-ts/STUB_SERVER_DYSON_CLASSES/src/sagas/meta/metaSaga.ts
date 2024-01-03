import {
  takeLatest,
  fork,
} from 'redux-saga/effects';
import { INIT_USER_INFO_PAGE } from '../../actions';

import Logger from '../../utils/Logger';
import { getWalletSaga } from '../wallet/walletSaga';


export function* initUserInfoPageSaga(action) {
  try {
    const {
      payload: { cookie },
    } = action;

    //other essential action on load page those call are based on cookie authorization

    console.log('get w wallet saga called !!! with cookie', cookie)
    yield fork(getWalletSaga, cookie)



  } catch (error) {
    const { message, status } = error || {};
    Logger.error({
      name: 'initUserInfoPageSaga',
      msg: 'Error preparing for checkout',
      detail: message,
      status,
      //body,
    });

    //yield put(PREPARE_FOR_CHECKOUT_FAILURE({ error }));
  }
}

export function* watchInitUserInfoPageSaga() {
  yield takeLatest(INIT_USER_INFO_PAGE, initUserInfoPageSaga);
}
