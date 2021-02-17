import React from 'react';
import { hydrate } from 'react-dom';
import App from '../shared/App';

/*
BROWSER SITE
 *our server markup has finised his job but coverting <App /> to strig
 *now bundle.js has been loaded and ready to replace <APP /> as a string to js component
 *normaly we would use React.renderDOM() method
 *but since we already renderd initial state by Server we want to hydrate
 *so it will write on top of the server inital render
 */

hydrate(<App {...window.__INITIAL_DATA__} />, document.getElementById('app'));
