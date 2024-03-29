const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');

module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  /***babel-regenerator-runtime"***/
  //Babel includes a polyfill that includes a custom regenerator runtime and core-js.
  //This will emulate a full ES2015+ environment

  entry: ['./src/server/server.ts'],
  /***babel-regenerator-runtime"***/
  //allows you to debug source files as they are in the source code
  //should be only used in development
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, '../../dist'),
    chunkFilename: 'server/chunk-[id].js', // TODO: Disable chunks server-side
    publicPath: '/assets/chunks/',
    filename: 'server.js',
  },
  resolve: {
    //Tell webpack what directories should be searched when resolving modules.
    modules: ['node_modules'],
    // Attempt to resolve these extensions in order
    extensions: ['.ts', '.tsx', '.js', '.json', '.jsx'],
  },
  optimization: {
    minimize: false, // no need to minify server code, it just makes stack traces harder to read
    splitChunks: {
      cacheGroups: {
        vendors: false,
        default: false,
      },
    },
  },
  module: {
    rules: [
      {
        //compile those file extensions
        test: /\.(js|jsx|ts|tsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        //compile those file extensions
        test: /\.css$/,
        // loaders in webpack works from the end so css-loader gets first
        // and then style loader inject style into the html
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  //set global for webpack used in the code:  __isBrowser__: "false",
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: 'false',
    }),
  ],
  node: {
    // true: The dirname of the input file relative to the context option.
    // false:  Webpack won't touch your __dirname code, which means you have the regular Node.js __dirname behavior. The dirname of the output file when run in a Node.js environment.
    __dirname: true,
  },
  watchOptions: {
    ignored: ['node_modules'],
  },
};
