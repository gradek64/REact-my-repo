const path = require('path');

const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // polyfill needed fro AE11 support
  entry: ['@babel/polyfill', './src/'],
  // configuration from wepack to serve files from;
  output: {
    path: path.join(__dirname, 'public'),
    //for multiple bundles files use below
    chunkFilename: '[name].bundle.js',
    filename: '[name].bundle.js',
  },
  //entry path for files __dirname/public etc
  context: __dirname,
  devtool: 'cheap-module-eval-source-map',
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
  plugins: [
    //By default, this plugin will remove all files inside webpack's
    //output.path directory, as well as all unused webpack assets after every successful rebuild.
    new CleanWebpackPlugin({
      root: __dirname,
      verbose: true,
      dry: false,
    }),
    //This will generate a file [ouput.path]/index.html
    new HtmlWebPackPlugin({
      template: 'index.html', //The file to write the HTML
      filename: 'index.html', //The fileName to write the HTML
      chunksSortMode: 'none', //Allows to control how chunks should be sorted
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          //config for third party split chunks
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'initial',
        },
      },
    },
    runtimeChunk: {
      name: 'manifest', //webpack detailed notes on all your modules to put them together
    },
    minimize: false, //dont minimize make this customable for Production mode
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'), // responsible for serving static content like images
    // publicPath: '/public/', // fallback not existing urls to index not neccessary
    port: 3000,
    historyApiFallback: true,
  },
};
