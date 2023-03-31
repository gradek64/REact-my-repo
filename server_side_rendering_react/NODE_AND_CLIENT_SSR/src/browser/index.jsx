import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "../shared/components/App";
hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  //this id needs to be specified in server.js html output  <div id="app">${markup}</div>
  document.querySelector("#app")
);
