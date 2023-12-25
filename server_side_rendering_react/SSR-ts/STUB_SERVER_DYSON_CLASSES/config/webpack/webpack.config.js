const argosVendorPackages = require('@sainsburys-tech/boltui-vendor').webpackExternals
const ManifestPlugin = require('webpack-manifest-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const boxen = require('boxen')
const chalk = require('chalk')

const { argosModules } = require('./paths')

const argv = process.argv.slice(2)
const portIndex = argv.indexOf('--port') + 1
const port = (portIndex && argv[portIndex]) || 3000

const NODE_ENV = process.env.NODE_ENV || 'production'
const publicPath = process.env.PUBLIC_PATH_BOSUN || '/assets/payment/'
const modeIndex = argv.indexOf('--mode') + 1
const webpackMode = (modeIndex && argv[modeIndex]) || 'production'

const isProduction = NODE_ENV === 'production' && webpackMode === 'production'

const webpackSeverMsg = () =>
  console.log(
    `\n${boxen(
      `
${chalk.green(`Prepay UI started`)}
${chalk.grey('-----------------------------------\n')}
${chalk.white(`Local:        `)}${chalk.cyan(`http://localhost:${port}`)}
${chalk.white(`Dashboard:    `)}${chalk.cyan(`http://localhost:${port}/dashboard`)}
`,
      { borderStyle: 'round', padding: 1, borderColor: '#008080' },
    )}\n`,
  )

const smp = new SpeedMeasurePlugin({ disable: !isProduction })

// Some module owners have given up supporting browsers, and think that consumers should
// do transpilation themselves. See: https://github.com/sindresorhus/ama/issues/446
const nodeModulesToTranspile = /node_modules(\/|\\)(query-string|split-on-first|normalize-url|strict-uri-encode)/

const config = smp.wrap({
  mode: webpackMode,
  target: 'web',
  stats: isProduction
    ? {
        assets: true,
        children: false,
        modules: false,
      }
    : 'errors-only',
  performance: {
    hints: false,
  },
  entry: {
    client: './src/client',
  },
  optimization: isProduction
    ? {
        namedModules: true,
        namedChunks: true,
        splitChunks: {
          chunks: 'all',
        },
        minimizer: [
          new UglifyJsPlugin({
            cache: true,
            parallel: true,
            sourceMap: true,
          }),
        ],
      }
    : {},
  resolve: {
    mainFields: ['esnext', 'browser', 'module', 'main'],
    extensions: ['.ts', '.tsx', '.js', '.json', '.jsx'],
    plugins: [new TsconfigPathsPlugin()],
  },
  output: isProduction
    ? {
        filename: 'client/[name].[hash:8].min.js',
        chunkFilename: 'client/chunk-[id].[chunkhash:8].min.js',
        publicPath,
      }
    : {
        filename: 'client/[name].js',
        chunkFilename: 'client/chunk-[id].js',
        publicPath,
      },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['source-map-loader'],
        enforce: 'pre',
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        include: [/src/, argosModules, nodeModulesToTranspile],
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
    argosVendorPackages({
      exclude: ['dayjs/plugin/customParseFormat'],
    }),
  ],
  plugins: [
    isProduction ? new ManifestPlugin({ fileName: 'asset-manifest.json' }) : null,
    isProduction
      ? new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          openAnalyzer: false,
          reportFilename: '../reports/bundle-visualizer.html',
        })
      : null,
    isProduction
      ? new DuplicatePackageCheckerPlugin({
          emitError: true,
          exclude(instance) {
            return (
              instance.name === 'prop-types' ||
              instance.name === 'regenerator-runtime' ||
              instance.name === '@babel/runtime' ||
              instance.name.startsWith('@argos/')
            )
          },
        })
      : null,
    {
      apply: (compiler) => {
        compiler.hooks.afterEmit.tap('AfterEmitPlugin', () => {
          if (isProduction) console.log('\n\n> Local server starting on http://localhost:8080\n')
          else webpackSeverMsg()
        })
      },
    },
  ].filter(Boolean),
  devServer: {
    port,
    proxy: {
      '/': 'http://localhost:8080',
    },
    allowedHosts: ['.local'],
    noInfo: !isProduction,
    stats: {
      children: isProduction,
    },
  },
  devtool: isProduction ? 'none' : 'cheap-module-eval-source-map',
})

module.exports = config
