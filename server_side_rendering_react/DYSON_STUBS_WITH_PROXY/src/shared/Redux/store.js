import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import thunkMiddleware from "redux-thunk";
import createRootReducer from "./reducers";

export default function configureStore(browserOrMemoryHistory, preloadedState) {
  const store = createStore(
    createRootReducer(browserOrMemoryHistory), // root reducer with router state
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(browserOrMemoryHistory), // for dispatching history actions
        thunkMiddleware
      )
    )
  );

  return store;
}
