const fs = require('fs');
const path = require('path');

const { defineConfig } = require('cypress');
const webpack = require('@cypress/webpack-preprocessor');
const {
  addCucumberPreprocessorPlugin,
} = require('@badeball/cypress-cucumber-preprocessor');

function getConfigurationByEnvAndViewport(env, viewport) {
  const pathToEnvConfigFile = path.resolve('cypress/config/env', `${env}.json`);
  const pathToViewportConfigFile = path.resolve(
    'cypress/config/viewport',
    `${viewport}.json`
  );

  const envConfigFile = fs.readFileSync(pathToEnvConfigFile, {
    encoding: 'utf-8',
  });
  const viewportConfigFile = fs.readFileSync(pathToViewportConfigFile, {
    encoding: 'utf-8',
  });

  const envConfig = JSON.parse(envConfigFile);
  const viewportConfig = JSON.parse(viewportConfigFile);

  return {
    ...envConfig,
    ...viewportConfig,
  };
}

module.exports = defineConfig({
  chromeWebSecurity: false,
  retries: {
    runMode: 4,
    openMode: 0,
  },
  numTestsKeptInMemory: 10,
  defaultCommandTimeout: 25000,
  responseTimeout: 120000,
  e2e: {
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        'file:preprocessor',
        webpack({
          webpackOptions: {
            resolve: {
              extensions: ['.ts', '.js'],
            },
            module: {
              rules: [
                {
                  test: /\.js$/,
                  exclude: [/node_modules/],
                  use: [
                    {
                      loader: 'babel-loader',
                    },
                  ],
                },
                {
                  test: /\.feature$/,
                  use: [
                    {
                      loader: '@badeball/cypress-cucumber-preprocessor/webpack',
                      options: config,
                    },
                  ],
                },
              ],
            },
          },
        })
      );

      // Load environment configs
      const env = config.env.envFile || 'stub';
      const viewport = config.env.viewport || 'desktop';

      return {
        ...config,
        ...getConfigurationByEnvAndViewport(env, viewport),
      };
    },
    specPattern: 'cypress/e2e/**/*.feature',
    excludeSpecPattern: ['*.md'],
    baseUrl: 'http://localhost:3389',
  },
});
