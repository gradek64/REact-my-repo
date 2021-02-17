import { SET_ACTIVE_CHANNEL } from "./../actions";
import { currentUserSelector } from "./../selectors";
import { takeLatest, call, select } from "redux-saga/effects";
import axios from "axios";

//there is no dispatch in this generator we only call fetch
export function* putActiveChannel({ id }) {
  const currentUser = yield select(currentUserSelector);
  const userID = currentUser.get(`id`);
  yield console.log("sss", userID);
  yield call(() => axios.get(`/user/activeChannel/${userID}/${id}`));
}

//=========================================================
// @usage: this generator function is register function for saga watcher
/* once saga are registered with sagaModule.run(saga) then 
// below function if it is in the watcher function stack it will be 
// executed once run() kicks of 
// IMPORTANT registering is not listening yet 
// whatever you set inside bellow function will listed for dispatch
// 
//=========================================================

/**
* Example Usage:
*
* @takeLatest(SET_ACTIVE_CHANNEL, putActiveChannel);
* @ only this bits sets listener for SET_ACTIVE_CHANNEL action
* saga will takeOnlyLatest action SET_ACTIVE_CHANNEL dispatched.
* without the action it wont work at all just watcher will register
* activeChannelSaga
*/
/**
 */
//activeChannelSaga is only watches what is inside!!
export function* activeChannelSagaWatcher() {
  //listen for dispatch({SET_ACTIVE_CHANNEL})
  yield takeLatest(SET_ACTIVE_CHANNEL, putActiveChannel);
  yield console.log(
    "[*****info****]  registered activeChannelSagaWatcher [*****info****]"
  );
}
