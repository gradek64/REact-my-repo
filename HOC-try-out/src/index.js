import React from "react";
import ReactDOM from "react-dom";
import SimpleHOC from "./simple_HOC";
import StateCompositionComponent from "./HOC_independent_state_composition";
import * as ListRenderComponent from "./HOC_simple_all_logic_seperated";
import HOCWithState from "./HOC_with_state";

//Search box example;
import SearchBoxExample from "./FilterDataBox/ListTopManagement";

import "./assets/scss/app.scss";

const starWarsChars = [
  { name: "Luke", side: "light" },
  { name: "Darth Vader", side: "dark" },
  { name: "Obi-wan Kenobi", side: "light" },
  { name: "Palpatine", side: "dark" }
];

console.log("HOCWithState", HOCWithState);

ReactDOM.render(
  <HOCWithState list={starWarsChars} side={"light"} />,
  document.getElementById("app")
);
ReactDOM.render(
  <ListRenderComponent.Set1 list={starWarsChars} side={"light"} />,
  document.getElementById("app1")
);
ReactDOM.render(
  <ListRenderComponent.Set2 list={starWarsChars} />,
  document.getElementById("app2")
);
const jsx = (
  <div>
    <StateCompositionComponent list={starWarsChars} />
  </div>
);

ReactDOM.render(jsx, document.getElementById("app3"));
ReactDOM.render(
  <SearchBoxExample list={starWarsChars} />,
  document.getElementById("app4")
);
