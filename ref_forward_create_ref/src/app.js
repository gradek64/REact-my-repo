import React from "react";
import ReactDOM from "react-dom";
//custom
import ES7ClassSyntaxSupport from "./ES7-class-syntax";
import DisplayButtons from "./React.forwardRef/DisplayButtons";
import SearchableTable, {
  FilterButton
} from "./React.forwardRef/Forward_in_HOC/main";

const jsx = (
  <div>
    <h1>{"works"}</h1>
    <ES7ClassSyntaxSupport />
    <DisplayButtons />
    <SearchableTable />
    <FilterButton />
  </div>
);

ReactDOM.render(jsx, document.getElementById("app"));
