import React from "react";
import { hydrate } from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { createBrowserHistory } from "history";

import configureStore from "../shared/Redux/store";

const browserHistory = createBrowserHistory();
//pass server redux state to browser
const store = configureStore(browserHistory, window.__INITIAL_REDUX_DATA);
//remove window extra property to collect garbage
delete window.__INITIAL_REDUX_DATA;

import App from "../shared/components/App";

hydrate(
  <ReduxProvider store={store}>
    <ConnectedRouter history={browserHistory}>
      <App />
    </ConnectedRouter>
  </ReduxProvider>,
  //this id needs to be specified in server.js html output  <div id="app">${markup}</div>
  document.querySelector("#app")
);
