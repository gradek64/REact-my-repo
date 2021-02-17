import React from "react";
import styled from "styled-components";

/*
  It is possible to style component and keep all the react architecture of a component
  the trick is event though you are not sending a class name styled(Component) will be 
  applied via className the argument has to be called className 

  csont component = { className }) => ( contemt className={className})

*/

const Button = ({ className }) => (
  <button className={className}>button react architecture</button>
);

const BtnStyle = styled(Button)`
  color: green;
  font-weight: bold;
`;

export default BtnStyle;
