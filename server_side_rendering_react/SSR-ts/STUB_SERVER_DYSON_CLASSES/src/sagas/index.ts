import { all, fork } from 'redux-saga/effects'

import {
  watchInitUserInfoPageSaga
} from './meta/metaSaga'


// We only want to watch the 'watcher' sagas
export default function* root() {
  yield all([
    fork(watchInitUserInfoPageSaga),
  ])
}
