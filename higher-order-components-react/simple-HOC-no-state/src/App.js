import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { starWarsChars } from "./list";
import SimpleHOCnotperfect from "./Simple-HOC-not-perfect";
import HOCwithfuntionality from "./HOC-with-funtionality.js";
import FilteredList from "./state-HOC-with-funtionality.js";
import ToggleableFilteredList, {
  FilterList2,
  FilteredListState
} from "./state-HOC-with-funtionality2.js";

/*
<SimpleHOCnotperfect side='dark' list={starWarsChars} />
<p>---------devider---------</p>
<HOCwithfuntionality side='light' list={starWarsChars} />
<p>---------devider---------</p>
<FilteredList list={starWarsChars} />
<p>---------FilterList2---------</p>
<FilterList2 list={starWarsChars} side='light'/>
<p>---------FilteredListState---------</p>
<FilteredListState list={starWarsChars} />
*/

console.log(HOCwithfuntionality);
class App extends Component {
  render() {
    return (
      <div className="App">
        <p>---------FilteredListState---------</p>
        <FilteredListState list={starWarsChars} />
        <p>---------devider---------</p>
        <ToggleableFilteredList list={starWarsChars} />
      </div>
    );
  }
}

export default App;
