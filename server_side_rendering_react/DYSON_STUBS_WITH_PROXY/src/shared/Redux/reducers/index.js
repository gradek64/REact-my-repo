import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import data from "../reducers/dataReducer";

/**
 * @param {} history either browser or memory history(server site static router)
 */
const createRootReducer = (history) =>
  combineReducers({
    data,
    router: connectRouter(history),
  });

export default createRootReducer;
