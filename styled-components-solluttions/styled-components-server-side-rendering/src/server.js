import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './client/App';
import ServerSiteTemplate from './client/ServerSiteTemplate';
import { ServerStyleSheet } from 'styled-components'; // <-- importing ServerStyleSheet

const port = 3000;
const server = express();

// Creating a single index route to server our React application from.
server.get('/', (req, res) => {
  /**
   * This is where all the magic happens with Styled Components and
   * rendering our React application to string so we can insert it
   * into our HTML template to send to the client.
   */
  const sheet = new ServerStyleSheet();

  /*

    it is possible to render your react component on the server site as a string  that means
    behind the scenes method 

      *** renderToString() *** 

    will render your component and spits out teh string outcome out of it, this method it will
    also work on the client site but the idea is to use it on the server site to spead up the 
    process of loading the page

      is method provided by React itselft (not addtional library needed)
      that works either or server or client site (but mosly used by server site)
      that allows to render component as a string => ready for browser to inject that string into html markup

  */

  /*
    according to styled-components documentation 
    `The collectStyles method wraps your element in a provider`

        but in our case both do the same:
         renderToString(<App />)  === renderToString(sheet.collectStyles(<App />))
         
    styled-components method  collectStyles() will collect styles needed for rendering the wrapped
    component
  */

  const ComponentAppContent = renderToString(sheet.collectStyles(<App />)); // <-- collecting styles
  const stylesofComponentApp = sheet.getStyleTags(); // <-- getting all the tags from the sheet
  const title = 'Server side Rendering with Styled Components';

  res.send(
    /*
     ServerSiteTemplate is a React component that is beign rendered behind the scenes 
     and it is output as 'string' in res.send response in node
    */
    ServerSiteTemplate({
      ComponentAppContent,
      stylesofComponentApp, // <-- passing the styles to our Html template
      title
    })
  );
  /* 

  React comes with more redender site methods but those are below the scope of this 
  ticket since they need some kind of knowledge of node server 

  example below
  
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

  //res.write(body, "utf-8");
  const stream = renderToNodeStream(
    ServerSiteTemplate({
      ComponentAppContent: '<p>yhdshshd</p>',
      stylesofComponentApp, // <-- passing the styles to our Html template
      title
    })
  );
  stream.pipe(res, { end: false });
  stream.on('end', () => {
    res.end();
  }); */
});

server.listen(port);
console.log(`Serving at http://localhost:${port}`);
