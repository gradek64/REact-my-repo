import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

import Layout from './components/Layout';
import createStore from './store';
import './App.css';

const store = createStore(window.REDUX_DATA);

const jsx = (
  <ReduxProvider store={store}>
    <Router>
      <div>
        {'is rendered in client'}

        <Layout />
      </div>
    </Router>
  </ReduxProvider>
);

const app = document.getElementById('app');
// hydrate merge together server side with client site but REact warns it should be
//indentical but if it is intentional You should use

/*
      two-pass rendering. 
      Components that render something different on the client can read a state variable like 
      which you can set to true in componentDidMount(). 
*/
ReactDOM.hydrate(jsx, app);
