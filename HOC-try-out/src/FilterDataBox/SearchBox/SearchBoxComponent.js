import React from "react";
export default ({ eventHandler }) => (
  <input
    className="search-box"
    type="text"
    onInput={e => eventHandler(e.target.value)}
  />
);
