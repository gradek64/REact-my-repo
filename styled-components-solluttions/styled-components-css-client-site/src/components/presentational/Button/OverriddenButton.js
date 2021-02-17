import React from "react";
import styled from "styled-components";
import Button from "./ButtonStyleAttached";

// A new component based on Button, but with some override styles
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

export default TomatoButton;
