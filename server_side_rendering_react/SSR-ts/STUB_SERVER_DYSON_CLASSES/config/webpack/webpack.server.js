const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const webpackNodeExternals = require('webpack-node-externals')
const { argosModules } = require('./paths')

// Get the mode from the CLI args - default to production
const argv = process.argv.slice(2)
const publicPath = process.env.PUBLIC_PATH_BOSUN || '/assets/payment/'
const modeIndex = argv.indexOf('--mode') + 1
const webpackMode = (modeIndex && argv[modeIndex]) || 'production'

const config = {
  mode: webpackMode,
  target: 'node',
  entry: ['./src/server'],
  output: {
    filename: 'server.js',
    chunkFilename: 'server/[id].chunk.js', // TODO: Disable chunks server-side
    publicPath,
  },
  resolve: {
    mainFields: ['esnext', 'browser', 'module', 'main'],
    extensions: ['.ts', '.tsx', '.js', '.json', '.jsx'],
    plugins: [new TsconfigPathsPlugin()],
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
        test: /\.(js|jsx|ts|tsx)$/,
        include: [/src/, argosModules],
        loader: 'babel-loader',
      },
      {
        test: /\.svg$/,
        include: [/src/, argosModules],
        loader: 'svg-inline-loader',
        options: {
          removeSVGTagAttrs: false,
        },
      },
    ],
  },
  externals: [
    webpackNodeExternals({
      whitelist: [/argos-(.*)/, /@argos/, /@jsluna/, /@sainsburys-tech\/(bolt|tokens)/],
    }),
  ],
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
    setImmediate: false,
  },
}

module.exports = config
