import React from "react";
const DropDownSelect = ({ eventHandler }) => (
  <select
    onChange={e => {
      eventHandler(e.target.value);
    }}
  >
    <option value="sortASC">Sort ASC</option>
    <option value="sortDESC">Sort DESC</option>
  </select>
);

export default DropDownSelect;
