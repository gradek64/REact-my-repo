import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Loadable from "react-loadable";

import App from "../shared/components/App";

const renderApp = () => {
  // Use Loadable to preload any modules we need for initial render
  Loadable.preloadReady().then(() => {
    hydrate(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      //this id needs to be specified in server.js html output  <div id="app">${markup}</div>
      document.querySelector("#app")
    );
  });
};

renderApp();
