const path = require('path');

// const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  // polyfill needed fro AE11 support
  entry: ['@babel/polyfill', './src/'],
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
        test: /\s?.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
        ],
      },
    ],
  },
  devtool: 'cheap-module-eval-source-map',
  /* plugins: [
    new HtmlWebPackPlugin({
      template: './dev-server/index.html',
      filename: './index.html',
    }),
  ], */
  devServer: {
    contentBase: path.join(__dirname, 'public'), // responsible for serving static content like images
    // publicPath: '/public/', // fallback not existing urls to index not neccessary
    port: 3000,
    historyApiFallback: true,
  },
};
