import React from "react";
import styled from "styled-components";

const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

const ReversedButton = props => (
  <Button {...props} children={props.children.split("").reverse()} />
);
/*
    as tag/component attribute allows to render any tag or component with the same
    styling very usufull for menu navs and mutiple lists in general
*/

export default () => (
  <div>
    <Button>Normal Button</Button>
    <Button as="a" href="/">
      Link with Button styles
    </Button>
    <TomatoButton as="a" href="/">
      Link with Tomato Button styles
    </TomatoButton>
    <Button as={ReversedButton}>Custom Button with Normal Button styles</Button>
  </div>
);
