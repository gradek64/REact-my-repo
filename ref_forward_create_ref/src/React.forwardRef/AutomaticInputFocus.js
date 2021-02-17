import React from "react";

const AutomaticInputFocus = ({ myRef, ...rest }) => (
  <input ref={myRef} {...rest} />
);

export default AutomaticInputFocus;
