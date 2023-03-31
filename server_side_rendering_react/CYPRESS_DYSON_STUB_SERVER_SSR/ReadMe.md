# Instructions

This is node.js application that is bundled with Webpack

## Installation

```bash
npm install
```

```bash
#this is app is isomorphic APP and runs on :

localhost:3100
```

```bash
#to debug/inspect on server site open in chrome :

chrome://inspect
```

## Scripts

### npm run dev

```bash
"dev": "concurrently --raw --kill-others \"npm:dev:*\""

# It will concurrently (at the same time) run all dev:scripts.

#1. It will run react node app (express application) running on

# localhost:3389

#2. It will run react client web server that hydrates the outcome from express sever site react app

# localhost:3000

####

# !! both of the apps (client and server) will/can run separately

# but the client site needs this webpack.config for devServer:
```

```bash
part of webpack.config.js file

    //nothing in devServer
devServer: {
    /* proxy: {
      "/": "http://localhost:3389",
    }, */
  },
  //Two plugins one for global variable from webpack env and one for
  // index.html file for web-dev-server
plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "true",
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],

```

```bash
## facts about webpack.config.js

#1# client site

# it will run webpack.config.js and creates dist/bundle.js which is sets in index.html output file or output of express

res.send(`<!DOCTYPE html>
    <html>
        <div id="app">${markup}</div>
    </html>`)

#then the content of the server it will be hydrated in the container set in the template file <div id="app">${markup}</div>

hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector("#app")
);
# hydrate app into div#app container

#2# server site

#it will run server.js from webpack.server.js and start a server
# it is important to set dist as static folder for express server without this the <script src="dist/bundle.js"> will be treated as link not a file

app.use(express.static("dist"));

```
