/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { takeLatest, call, put } from "redux-saga/effects";
import logger from "node-color-log";

import {
  INIT_USER_INFO_PAGE,
  GET_WALLET_SUCCESS,
  GET_WALLET_FAILURE,
} from "../../actions";

import api, { checkResponse } from "../../api";

export function* initUserInfoPageSaga(action: { payload: { cookie: string } }) {
  try {
    const {
      payload: { cookie },
    } = action;

    // other essential action on load page those call are based on cookie authorization

    console.log("----------get w wallet saga called !!! with cookie", cookie);
    const id = "4343";

    // when the API response with API error this still wont fall in catch
    // you need actual js error to fall in catch so for example accessing value that does not exists
    const response = yield call(api.getWallet, id, cookie);
    // check response will check for error basically body being empty and status

    const wallet = yield call(checkResponse, response);

    console.log("wallet.........", wallet);
    yield put(GET_WALLET_SUCCESS(wallet));
  } catch (error) {
    const { message, status, response } = error || {};
    const { body } = response || {};

    // if user is Unauthorized then in UI it will redirect to login page
    logger.color("red").log("Error response", {
      name: "initUserInfoPageSaga",
      msg: "Error initUserInfoPageSaga",
      detail: message,
      status,
      body,
    });
    yield put(GET_WALLET_FAILURE(error));
  }
}

export function* watchInitUserInfoPageSaga() {
  yield takeLatest(INIT_USER_INFO_PAGE, initUserInfoPageSaga);
}
