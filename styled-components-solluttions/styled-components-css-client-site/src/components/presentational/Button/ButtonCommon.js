import React from "react";
import styled from "styled-components";

const Button = ({ primary }) => (
  <BtnStyle primary={primary}>click me2s</BtnStyle>
);

const BtnStyle = styled.button`
  cursor: pointer;
  background: transparent;
  border-radius: 3px;
  color: ${props => (props.primary ? "pink" : "yellow")};
  border: ${props => (props.primary ? "2px solid pink" : "2px solid yellow")};
  transition: 0.5s all ease-out;
  &:hover {
    color: white;
    background-color: ${props => (props.primary ? "violet" : "palevioletred")};
  }
`;

export default Button;
