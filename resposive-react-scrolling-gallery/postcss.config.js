module.exports = {
  syntax: 'postcss-scss',
  plugins: {
    'postcss-import': {},
    'postcss-advanced-variables': {},
    'postcss-calc': {},
    'postcss-simple-vars': {},
    'postcss-nested': {},
    'postcss-nested-ancestors': {},
    'postcss-cssnext': {
      browsers: ['last 2 versions', '> 5%'],
    },
  },
};
