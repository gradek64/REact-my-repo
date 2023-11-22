import express from "express";
import Loadable from "react-loadable";
import logger from "node-color-log";
import ssrMiddleware from "./middleware/ssr";


const app = express();

app.use(express.static('../static'))

// Renders the app
app.use(ssrMiddleware);

const PORT = 3389;
// Preload all the chunks then start the app
Loadable.preloadAll().then(() => {
  app.listen(PORT, () => {
    logger.info(`node server running on:${PORT}`);
  });
});
