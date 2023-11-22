import express from "express";
import Loadable from "react-loadable";
import logger from "node-color-log";
import ssrMiddleware from "./middleware/ssr";
import path from 'path';

const app = express();



/* you need to set public path so you can serve you static files as css files, images etc

express.static(path.join(process.cwd(), 'public')))

will produce path depending what env are you in for localhost will direct to your user directory as:

'Users/greg.gil/dev/REact-my-repo/server_side_rendering_react/SSR-ts/with_css_and_styled_components/public'
*/

app.use('/public', express.static(path.join(process.cwd(), 'public')))

// Renders the app
app.use(ssrMiddleware);

const PORT = 3389;
// Preload all the chunks then start the app
Loadable.preloadAll().then(() => {
  app.listen(PORT, () => {
    logger.info(`node server running on:${PORT}`);
  });
});
