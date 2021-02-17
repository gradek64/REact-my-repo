import React from 'react';
import { renderToString } from 'react-dom/server';
import styled from 'styled-components';
import SomeComponentrenderToString from './SomeComponent';

// Our single Styled Component definition
const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 50%;
  height: 50%;
  font-size: 40px;
  background: linear-gradient(20deg, rgb(219, 112, 147), #daa357);
`;

const App = () => (
  <AppContainer>
    <div>{renderToString(<SomeComponentrenderToString />)}</div>
    <div>💅</div>
  </AppContainer>
);

export default App;
