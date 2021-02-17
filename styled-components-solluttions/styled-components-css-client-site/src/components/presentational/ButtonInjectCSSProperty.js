import React from "react";
import styled, { css } from "styled-components";

//create your css property based on prop in this case green-font
const complexMixin = css`
  color: ${props => (props["green-font"] ? "green" : "black")};
`;

//create whole css block based on a prop and then inject in styled below
const customHoverState = css`
  &:hover {
    color: pink;
    background-color: ${props =>
      props["green-font"] ? "lightGreen" : "palevioletred"};
  }
`;
/*
  ${props => (props.complex ? complexMixin : "color: blue;")}; 
  
  will render:
  color: green or blue 
  (depends on green-font prop);

  ${props => customHoverState}; 
  will render
  &:hover {
    color: pink;
    background-color: ${props =>
      props["green-font"] ? "lightGreen" : "palevioletred"};
  }
*/
const Button = styled.button`
  cursor: pointer;
  background: transparent;
  border-radius: 3px;
  ${props => (props.complex ? complexMixin : "color: blue;")};
  border: ${props => (props.primary ? "2px solid pink" : "2px solid yellow")};
  transition: 0.5s all ease-out;
  &:hover {
    color: white;
    background-color: ${props => (props.primary ? "violet" : "palevioletred")};
  }
  ${props => customHoverState};
`;

export default Button;
