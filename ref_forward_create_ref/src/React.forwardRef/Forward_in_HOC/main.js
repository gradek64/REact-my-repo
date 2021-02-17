import React from "react";
import SearchableTable from "./SearchTable";
import data from "./tableData";

const focusSearchInput = () => {
  console.log("here");
};
const FilterButton = () => (
  <button onClick={focusSearchInput}>filter table</button>
);

const Main = () => <SearchableTable data={data} />;
export { Main as default, FilterButton };
