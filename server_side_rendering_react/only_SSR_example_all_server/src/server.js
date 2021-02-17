import express from 'express';
import path from 'path';

import React from 'react';
import serialize from 'serialize-javascript';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';

import { StaticRouter, matchPath } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import Helmet from 'react-helmet';
import routes from './routes';
import Layout from './components/Layout';

const html = require('./components/staticView');

import createStore, { initializeSession } from './store';

const app = express();
const PORT = 2000;

app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('/', (req, res) => {
  const context = {};
  const store = createStore();
  console.log('route has changed');

  store.dispatch(initializeSession());

  const dataRequirements = routes
    .filter(route => matchPath(req.url, route)) // filter matching paths
    .map(route => route.component) // map to components
    .filter(comp => comp.serverFetch) // check if components have data requirement
    .map(comp => store.dispatch(comp.serverFetch())); // dispatch data requirement

  Promise.all(dataRequirements).then(() => {
    const jsx = (
      <ReduxProvider store={store}>
        <StaticRouter context={context} location={req.url}>
          <Layout />
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

app.listen(PORT, () => {
  console.log(`Magic happens on PORT:${PORT}`);
});

app.get('/test', (req, res) => {
  console.log('hit test');
  const jsx = () => renderToString(<div>this is component</div>);
  res.end(html(jsx));
});

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
            <h3>this is static SSR header comming from server</h3>
            <section style='border:1px solid green;'>
            <h2>here we load react app</h2>
            <div id="app">${reactDom}</div>
            </section>
            <script>
                window.REDUX_DATA = ${serialize(reduxState, { isJSON: true })}
            </script>
            <script src="./app.bundle.js"></script>
        </body>
        </html>
    `;
}
