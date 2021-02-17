import React from "react";
import styled from "styled-components";

/*
below is the typical syntax of styleComponents for creating component 
yest below already creates component with style attached to it 
under the hood it accepts {children} <Component>{children}</Component>
and any attribute U want to pass to the component including event handlers

style.button`` === styled('button')


/*
  ALSO this component is using theme props that are being passed once is rendered by wrappper 
  <ThemeProvider>
      <Button>
  </ThemeProvider>
*/

const Button = styled.button`
  cursor: pointer;
  background: transparent;
  border-radius: 3px;
  color: ${props =>
    props.primary ? props.theme.primary : props.theme.secondary};
  border: ${props =>
    props.primary
      ? `2px solid ${props.theme.primary}`
      : `2px solid ${props.theme.secondary}`};
  transition: 0.5s all ease-out;
  &:hover {
    color: white;
    background-color: ${props => (props.primary ? "violet" : "palevioletred")};
  }
`;

export default Button;
