// eslint-disable-next-line import/no-extraneous-dependencies
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import meta from "./meta/metaReducer";

const createRootReducer = (history) =>
  combineReducers({
    meta,
    router: connectRouter(history),
  });

export default createRootReducer;
