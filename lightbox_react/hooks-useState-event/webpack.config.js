const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
//for some reason only works for file.js not for file.jsx needs fixiing:wq
module.exports = {
  // polyfill needed fro AE11 support
  entry: ['@babel/polyfill', './src/'],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
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
              name: 'images/[hash]-[name].[ext]' // give it new name once converted
            }
          }
        ]
      }
      /* {
        test: /\.(jpe?g|png)$/i,
        loader: 'responsive-loader',
        options: {
          // adapter: require('responsive-loader/sharp')
        }
      } */
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ]
};
