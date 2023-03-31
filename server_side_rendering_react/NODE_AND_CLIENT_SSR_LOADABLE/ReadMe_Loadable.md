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

## Prerequisites

```bash
--- webpack.config
1. You need at least webpack4.43.0 that supports dynamic imports

1a) webppack.server.config.js

output: {

    path: path.resolve(__dirname, "../../dist"),
    chunkFilename: "server/chunk-[id].js",
    publicPath: "/assets/chunks/",
    filename: "server.js",

  },

optimization: {

    minimize: false,
        splitChunks: {
        cacheGroups: {
            vendors: false,
            default: false,
        },
    },

},

1b) webppack.client.config.js

output: {

    path: path.join(__dirname, "../../", "src"),
    chunkFilename: "client/chunk-[id].js",
    publicPath: "/assets/chunks/",
    filename: "client/bundle.js",

  },
# the final path for main bundle.js and chunk will be
/assets/chunks/client/chunk-file.js
/assets/chunks/client/bundle.js

1c) server.js
#need to set this static path in main server.js

#set public folder for loading static files
app.use("/public", express.static(path.join(__dirname, "../public/")));

#extend public folder with dist/ redirect
app.use("/assets/chunks", express.static(path.join(process.cwd(), "dist/")));


2) package.json
 you need those 2 packages:

  "@babel/preset-env": "^7.16.8",
  "@babel/plugin-syntax-dynamic-import": "^7.8.3",

and then you need to put them into plugin section:

"plugins": [
      ...
      "@babel/plugin-syntax-dynamic-import",
      "react-loadable/babel"
    ]

3. ssr.js

#loading files in html body
<body>
...
 {getJsFiles(modulesChunks)}
 ...
 </body>
# this part is responsible for loading bundle.js and chunk scripts into page

{files.map((file) => (
        <script key={file} type="text/javascript" charSet="UTF-8" src={file} />
      ))}
```

## React-loadable

```bash

# allows you to load dynamic component when route is requested

#GuestCheckoutContainer component

export const GuestCheckoutContainer = Loadable({
  loader: () =>
    import(
      /* webpackChunkName: "guestCheckout", webpackPreload: 1 */ "./GuestCheckoutContainer"
    ),
  loading: () => 'loading'
});

#There are other option than  webpackPreload,webpackPrefetch

### prefetch
=> resource is probably needed for some navigation in the future

example:
#import(/* webpackPrefetch: true */ './path/to/LoginModal.js');

### preload
=> resource will also be needed during the current navigation
example:
#import(/* webpackPreload: true */ './path/to/LoginModal.js');



#1. client Site U need to wrap the App stack as:

// Preload all the chunks then start the app

Loadable.preloadReady().then(() => {
    hydrate(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      //this id needs to be specified in server.js html output  <div id="app">${markup}</div>
      document.querySelector("#app")
    );
  });

#2. server Site U need to wrap the App stack as:

// Preload all the chunks then start the app

Loadable.preloadAll().then(() => {
  app.listen(PORT, () => {
    logger.info(`magic happens on port:${PORT}`);
  });

```
