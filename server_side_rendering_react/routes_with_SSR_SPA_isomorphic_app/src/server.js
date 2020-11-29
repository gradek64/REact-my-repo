import express from 'express';
import path from 'path';

import React from 'react';
import serialize from 'serialize-javascript';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import Helmet from 'react-helmet';
import routes from './routes';
import Layout from './components/Layout';
import createStore, { initializeSession } from './store';
const __dirname = path.resolve();

const app = express();

app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('/*', (req, res) => {
  const context = {};
  const store = createStore();

  store.dispatch(initializeSession());

  const dataRequirements = routes
    .filter((route) => {
      const isMatch = matchPath(req.url, route);
      console.log('route', route);
      console.log('req.url', req.url);
      console.log('isMatch', isMatch);
      return isMatch;
    }) // filter matching paths
    .map((route) => route.component) // map to components
    .filter((comp) => comp.serverFetch) // check if components have data requirement
    .map((comp) => store.dispatch(comp.serverFetch())); // dispatch data requirement

  Promise.all(dataRequirements).then((all) => {
    console.log('dataRequirements', dataRequirements);

    console.log('all', all);
    const jsx = (
      <ReduxProvider store={store}>
        <StaticRouter context={context} location={req.url}>
          <div>
            {'is rendered in server'}

            <Layout />
          </div>
        </StaticRouter>
      </ReduxProvider>
    );
    const reactDom = renderToString(jsx);
    const reduxState = store.getState();
    const helmetData = Helmet.renderStatic();

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(htmlTemplate(reactDom, reduxState, helmetData));
  });
});

app.listen(2048);

function htmlTemplate(reactDom, reduxState, helmetData) {
  return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            ${helmetData.title.toString()}
            ${helmetData.meta.toString()}
            <title>React SSR</title>
            <link rel="stylesheet" type="text/css" href="./styles.css" />
        </head>
        
        <body>
            <div id="app">${reactDom}</div>
            <script>
                window.REDUX_DATA = ${serialize(reduxState, { isJSON: true })}
            </script>
            <script src="./app.bundle.js"></script>
        </body>
        </html>
    `;
}
