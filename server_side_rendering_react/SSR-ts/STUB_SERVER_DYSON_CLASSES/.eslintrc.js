module.exports = {
  parser: '@babel/eslint-parser',
  extends: [
    'airbnb/base',
    'plugin:jsx-a11y/strict',
    'plugin:react/recommended',
    'plugin:eslint-comments/recommended',
    'prettier',
    'plugin:json/recommended',
  ],
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  plugins: ['react', 'jsx-a11y', 'prettier', 'import', 'babel', 'react-hooks', 'css-modules', '@typescript-eslint'],
  rules: {
    /**
     * Override eslint-comments/recommended rules
     */
    'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
    /**
     * Override react/recommended rules
     */
    'react/prop-types': 0,
    'react/display-name': 0,
    'react/no-children-prop': 0,
    'react/no-unknown-property': 0,
    'react-hooks/rules-of-hooks': 'error',
    /**
     * Override airbnb/base rules
     */
    'import/no-named-as-default': 0,
    'import/no-cycle': 0,
    'import/prefer-default-export': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ], // needed for importing typescript files
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-param-reassign': ['error', { props: false }], // needed for redux toolkit & immer
    'no-nested-ternary': 0,
    'no-console': 0,
    'no-underscore-dangle': 0,
    'prefer-destructuring': 0,
    'arrow-body-style': 0,
    /**
     * Our own rules
     */
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: '@testing-library/react',
            importNames: ['render'],
            message:
              'Please use the custom RTL renderer built for this project. For more information, see `src/utils/@testing-library/renderer`.',
          },
        ],
      },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', ['parent', 'sibling'], 'index'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: './*.styles',
            group: 'object',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  globals: {
    paypal: 'writable',
    cy: 'writable',
    Cypress: 'writable',
  },
  overrides: [
    {
      files: [
        '**/*.spec.js',
        '**/__test__/*.js',
        '**/*.spec.jsx',
        '**/__test__/*.jsx',
        '**/utils/@testing-library/**/*.js', // @todo migrate waitForAnimatedSubmitButton to TS

        '**/*.spec.ts',
        '**/__test__/*.ts',
        '**/*.spec.tsx',
        '**/__test__/*.tsx',
      ],
      env: { jest: true },
      extends: ['plugin:jest/recommended', 'plugin:jest-dom/recommended'],
      rules: {
        'jest/no-mocks-import': 0,
        'import/no-extraneous-dependencies': 'off',
      },
    },
    {
      files: ['**/*.tsx', '**/*.ts'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      rules: {
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'lines-between-class-members': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
        '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true, argsIgnorePattern: '_' }],
        '@typescript-eslint/no-misused-promises': 'off',
      },
      parser: '@typescript-eslint/parser',
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json', './cypress/tsconfig.json'],
      },
    },
    {
      files: ['**/*.spec.tsx', '**/*.spec.ts'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      rules: {
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': 'error',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/unbound-method': 'off',
      },
      parser: '@typescript-eslint/parser',
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
      },
    },
    {
      files: ['cypress/**/*.js', 'cypress/**/*.ts'],
      extends: ['plugin:cypress/recommended', 'plugin:chai-friendly/recommended'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
}
