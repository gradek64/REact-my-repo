import { all, fork } from 'redux-saga/effects';
import { watchAddPromo, watchDeletePromo } from '../sagas/promosSaga';

// We only want to watch the 'watcher' sagas
export default function* root() {
  yield all([fork(watchAddPromo)]);
}
