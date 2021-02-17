import React from 'react';
import styled from 'styled-components';
import mediaQuery from '../../Theming/mediaQueries/mediaQuerySizes';

console.log('mediaQuery', mediaQuery);

const Button = styled.button`
  cursor: pointer;
  background: transparent;
  border-radius: 3px;
  color: ${props => (props.primary ? 'pink' : 'yellow')};
  border: ${props => (props.primary ? '2px solid pink' : '2px solid yellow')};
  transition: 0.5s all ease-out;
  &:hover {
    color: white;
    background-color: ${props => (props.primary ? 'violet' : 'palevioletred')};
  }
  ${mediaQuery.desktop`
      border: 1px solid blue;
   `}
  ${mediaQuery.laptop`
     border: 2px solid red;
   `}
   ${mediaQuery.tablet`
       border: 3px solid green;
   `}
   ${mediaQuery.mobile`
      border: 4px solid lightyellow;
   `}
`;

export default Button;
