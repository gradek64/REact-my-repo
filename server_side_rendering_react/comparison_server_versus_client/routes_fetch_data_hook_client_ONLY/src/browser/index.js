import React from 'react';
import ReactDOM from 'react-dom';
//import { hydrate } from 'react-dom'
import App from '../shared/App';
import { BrowserRouter } from 'react-router-dom';

//hydrate(
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app')
);
