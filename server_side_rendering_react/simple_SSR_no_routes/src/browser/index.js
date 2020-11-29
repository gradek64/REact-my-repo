import React from 'react';
import ReactDOM from 'react-dom';
import App from '../shared/App';

ReactDOM.hydrate(
  <App {...window.__INITIAL_DATA__} />,
  document.getElementById('app')
);
