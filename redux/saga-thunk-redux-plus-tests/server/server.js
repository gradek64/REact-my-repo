import http from "http";
import express from "express";
import cors from "cors";
import webpack from "webpack";
import webpackConfig from "./../webpack.config";
import webpackDevMiddleware from "webpack-dev-middleware";
import { simulateActivity } from "./simulateActivity";
const compiler = webpack(webpackConfig);
import webpackHotMiddleware from "webpack-hot-middleware";

import { channels } from "./db/Channel";
import { users } from "./db/User";
import socketIO from "socket.io";

let app = express();
const server = http.createServer(app);
const io = socketIO(server);

//access body on POST,PUT http response with
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(cors());
app.use(
  webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
  })
);

app.use(
  webpackHotMiddleware(compiler, {
    log: false,
    path: "/__webpack_hmr",
    heartbeat: 10 * 1000,
  })
);

import { getDefaultState } from "./getDefaultState";
import { handleRender } from "./serverRenderMiddleWare";
import { initializeDB } from "./db/initializeDB";

import { chance } from "./../src/utility";

initializeDB();
const currentUser = chance.pick(users);

/**
 *
 * @usage: for logging/testing data log your users and channels to console for easy routing
 *
 **/
//=================
/* console.log("==========USERS========");
console.log("USERS:", users);
console.log("==========CHANNELS========");
console.log("Channels:", channels);
//================= */

// Simulate a small amount of delay to demonstrate app's async features
app.use((req, res, next) => {
  const delay = 297;
  setTimeout(next, delay);
});

//routes
var routes = require("./routes");
app.use("/", routes);

export const createMessage = ({ userID, channelID, messageID, input }) => {
  const channel = channels.find((channel) => channel.id === channelID);

  const message = {
    id: messageID,
    content: {
      text: input,
    },
    owner: userID,
  };

  channel.messages.push(message);
  io.emit("NEW_MESSAGE", { channelID: channel.id, ...message });
};

app.use(express.static("public/css"));
//middlware for the root localhost:9000
app.use(
  "/",
  handleRender(() => getDefaultState(currentUser))
);

const port = 9000;
server.listen(port, () => {
  console.info(`Redux Messenger is listening on port ${port}.`);
});

simulateActivity(currentUser.id);
