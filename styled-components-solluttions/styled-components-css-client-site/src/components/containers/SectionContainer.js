import React from "react";
import styled from "styled-components";

const SectionContainer = styled.section`
  cursor: pointer;
  background: transparent;
  border-radius: 3px;
  color: green;
  border: ${props => (props.primary ? "2px dashed pink" : "2px dashed yellow")};
  transition: 0.5s all ease-out;
`;

export default SectionContainer;
