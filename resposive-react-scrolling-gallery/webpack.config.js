const path = require('path');

// const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  // polyfill needed fro AE11 support
  entry: ['@babel/polyfill', './src'],
  // configuration from wepack to serve files from;
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
        ],
      },
    ],
  },

  /*
      There are a couple of different options available in webpack that help you automatically
      compile your code whenever it changes:

      webpack's Watch Mode (watching for changes without compiling )
      webpack-dev-server (serve from bundle js ) --needed for router to work with 404s
      webpack-dev-middleware (plugins)


  */
  devtool: 'cheap-module-eval-source-map',
  // once U use content base the plugins are useless
  /* plugins: [
    new HtmlWebPackPlugin({
      template: './indexServeWebpackPlugin.html',
      filename: 'indexServeWebpackPlugin.html',
    }),
  ], */
  devServer: {
    contentBase: path.join(__dirname, 'public'), // responsible for serving static content like images
    // publicPath: '/public/', // fallback not existing urls to index not neccessary
    port: 5000,
    historyApiFallback: true,
  },
};
