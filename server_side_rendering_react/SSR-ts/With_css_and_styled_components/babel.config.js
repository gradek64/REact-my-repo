const browserSupport = {
  browsers: [
    'last 2 Chrome versions',
    'last 2 Firefox versions',
    'Safari >= 9',
    'Edge >= 15',
    'ie 11',
    'last 2 Opera versions',
    'Android >= 4.4',
    'last 2 ChromeAndroid versions',
    'last 2 FirefoxAndroid versions',
    'iOS >= 10',
  ],
};

module.exports = function babelConfig(api) {
  const isTest = api.env('test');
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: isTest ? { node: 'current' } : browserSupport,
        useBuiltIns: 'entry',
        corejs: 3,
      },
    ],
    '@babel/preset-react',
    '@babel/typescript',
  ];

  const plugins = [
    '@babel/proposal-class-properties',
    '@babel/plugin-transform-runtime',
    '@babel/plugin-syntax-dynamic-import',
    'babel-plugin-styled-components',
    'react-loadable/babel',
  ];

  const testPlugins = ['dynamic-import-node'];

  if (isTest) plugins.push(testPlugins);

  return {
    presets,
    plugins,
  };
};
