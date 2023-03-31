# Instructions

This example shows how to load dynamically password strength library 

## Installation

```bash
npm install

 "@zxcvbn-ts/core": "^2.0.1",
    "@zxcvbn-ts/language-common": "^2.0.1",
    "@zxcvbn-ts/language-en": "^2.0.1",
```

```bash
#this is app is isomorphic APP and runs on :

npm run dev 

this will launch application and bundle analyzer from webpack on client site

--- client/webpack.config.js ---

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

plugins: [
    new BundleAnalyzerPlugin()
],


```

## loading by dynamic import

```bash

```
export const setPasswordStrengthOptions = async (userInputs?: (string | number)[]): Promise<void> => {
    const zxcvbnCommonPackage = await import(/* webpackChunkName: "zxcvbnCommonPackage" */ '@zxcvbn-ts/language-common')
    const zxcvbnEnPackage = await import(/* webpackChunkName: "zxcvbnEnPackage" */ '@zxcvbn-ts/language-en')

    zxcvbnOptions.setOptions({
        dictionary: {
            ...zxcvbnCommonPackage.default.dictionary,
            ...zxcvbnEnPackage.default.dictionary,
            userInputs: userInputs || []
        },
        graphs: zxcvbnCommonPackage.default.adjacencyGraphs,
        translations: zxcvbnEnPackage.default.translations
    })
}


```bash


