const path = require('path');
// const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
console.log('webpack running', __dirname);
module.exports = {
  entry: ['./src/browser/index.jsx'],
  output: {
    path: path.join(__dirname, '../../', 'src'),
    chunkFilename: 'client/chunk-[id].js',
    filename: 'client/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
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
        use: ['style-loader', 'css-loader'],
      },
      /*
            without url-loader you can only serve static html path that point to index.html
            any image, css etc with correct path will laod as expected (browser takes care of it)
            
            if you want to load image to your .js file you need to use below;
      */
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [
          {
            loader: 'url-loader',
            // U can specify in option the compression to base64 for images below with some size limit
            options: {
              limit: 8000, // Convert images < 8kb to base64 strings
              name: 'images/[hash]-[name].[ext]', // give it new name once converted
            },
          },
        ],
      },
      /* {
        test: /\.(jpe?g|png)$/i,
        loader: 'responsive-loader',
        options: {
          // adapter: require('responsive-loader/sharp')
        }
      } */
    ],
  },
  //this tells what file extensions webpack should resolve in import statements
  //without this webpack will only resolve .js files by default
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.ts', '.tsx'],
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    // cheaky way match index.html with sever version , simply proxy client to server
    proxy: {
      '/': 'http://localhost:3100',
    },
  },
  //set global for webpack used in the code:  __isBrowser__: "true",
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: 'true',
    }),
    //this needs to be only set when client is running on its own, otherwise is using proxy for index.html
    /* new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }), */
  ],
};
