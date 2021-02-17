import express from 'express';
import cors from 'cors';
import React from 'react';
import { renderToString } from 'react-dom/server';
import serialize from 'serialize-javascript';
import App from '../shared/App';
import { fetchPopularRepos } from '../shared/api';

const app = express();

app.use(cors());
app.use(express.static('public'));

/*
  SERVER SITE
  * We want to render <App/> component on the server side
  * The way it work it will compile component with its initial state 
  * by sending props as configProps = { initialCount: 3 }
  * then method renderToString(<App {...configProps} />); 
  * will render our component as string and attached to markup
  * and server role ends here, to interact with component client browser will take over
  BROWSER SITE 
  * One important thing to notice is <APP > on the server site has to be 
  * INDENTICAL to the one on server (so the same props , no expections )
  * the way to pass props to browser clint <APP> component is by window glabal variable
  * <script>window.__INITIAL_DATA__ = ${serialize(configProps)}</script>
  * it is good practice to desctructure your props thefore they dont have to be 
  * explicitly defined what makes it easier to mantain both server and client site of <App /> componnet
  * <App {...window.__INITIAL_DATA__} /> we utilize our glabal variable configuration as destructured props
*/

app.get('*', (req, res) => {
  const configProps = { data: null };

  //BEFORE we renderToString <App /> component we need to fetch data on server site and then
  //renderToString() will spit out the outcome;

  fetchPopularRepos().then(data => {
    const updatedPropsData = { ...configProps, data };
    const markup = renderToString(<App {...updatedPropsData} />);

    res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR with RR</title>
        <script>window.__INITIAL_DATA__ = 
        ${serialize(updatedPropsData)}</script>
        <script src="/bundle.js" defer></script>
      </head>

      <body>
        <div id="app">${markup}</div>
      </body>
    </html>
  `);
  });
});

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`);
});
