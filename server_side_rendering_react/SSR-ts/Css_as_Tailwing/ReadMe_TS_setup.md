# Instructions

This is node.js application that is bundled with Webpack

## Installation

### package.json


```javascript
 "1" : "@typescript-eslint/parser" 
 "2" : "eslint-import-resolver-typescript": "^2.4.0",
 "3" : "eslint-plugin-import": "^2.24.0",
 "4" : "typescript": "^4.0.3"
 "5" : "babel-loader":""
 "5a" : "ts-loader": ""

1 => (makes eslint understand typescript)
2 => (linting of ES2015+ (ES6+) import/export syntax for TS)
3 => (linting of ES2015+ (ES6+) import/export syntax for JS)
4 => (typescript version )
5 => (babel-loader needed to transpile from TS to js )
5a =>or (ts-loader needed to transpile from TS to js )

```
list of babel presets and plugins needed for TS converstion

```javascript
"babel": {
    "presets": [
      "@babel/react",
      "@babel/preset-env",
      "@babel/typescript"
    ],
    "plugins": [
      "@babel/proposal-class-properties",
      "@babel/plugin-transform-runtime",
      "@babel/plugin-syntax-dynamic-import",
      "react-loadable/babel"
    ]
  },
```



### webpack.config

```javascript
const path = require('path');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      //ts-loader
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        //or babel-loader
        test: /\.(js|jsx|ts|tsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```

# TS Scope :

### root/ts.config

if not defined in ts.config then the scope goes down from root location 
(where ts.config is defined) unless said in ts.config in include tag as below:

```bash

  "include": ["./src/**/*.ts", "./src/**/*.tsx", "./src/**/*.js", "./src/**/*.jsx"],

```

## Modules type definition

Every module imported to TS/TSX file needs to have its own type defined either by: 
```bas
1 @types/library 
2 or by defining d.ts file
```
### TS declaration in modules
Popular libraries either have types already defined in core files or they need external package, it is advisable to install them according to your js package version

```bash
 npm i @types/react@^16.8.5 -S
 npm i @types/express@^4.16.4 -S

 @types/react
 @types/express
```


### TS declaration outside modules

### node_modules/@types/library or
### @root/**/* (any path from root)

#1. when @types dont exist and there no external package @types/library then 
you need to define file as utils.d.ts that has types that you are going to use
in your project as below for utils module

```bash
declare module 'utils' {
    export function arrayify<T>(input: T): [typeof input]
}
```

