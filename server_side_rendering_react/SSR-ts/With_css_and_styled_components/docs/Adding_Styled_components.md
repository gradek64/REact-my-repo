## Before you start 

You are free to add any stylesheet directly in your html head section. This will work, one think to remember is those styles will get overridden in styled Components stylesheets as they are render after. So if you add something to `Body{}` tag the one from styled sheet will be taken. Nevertheless it could be useful to add general library to give overall styling solution up to you.

```html
 <head>
  <link href="bootstrap.css" />
  <script src="bootstrap.js"</script>
</head>
```



## Server Side Rendering v2+

Styled-components supports concurrent server side rendering, with `stylesheet rehydration`. The basic idea is that every time you render your app on the server, you can create a ServerStyleSheet and add a provider to your React tree, that accepts styles via a context API. So The styled component will wrap entire application and pass its context down the tree.

###  Steps to implement 
- install styled-components and babel-plugin-styled-components


##### `bash`
```script
yarn add styled-components@5.2.1 -S
```
```script
yarn add babel-plugin-styled-components@1.11.1 -D
```


- add babel-plugin-styled-components to your babel config file or to your package.json depeding
where did you set you babel config

##### `babel.config.js`
```javascript
module.exports = function babelConfig(api) {
...
const plugins = [
    'babel-plugin-styled-components',
  ];
...
}

```
### 1. Steps on Server site files
***
- import stylesheet

##### `ssr.js`
```javascript
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
```
-  Create a context for styled-components to insert inline CSS

```javascript
      const sheet = new ServerStyleSheet();
```
- create wrapper with the context passed down to main App component
```javascript
 <StyleSheetManager sheet={sheet.instance}>
 <App />
</StyleSheetManager>
```
***
### 2. Steps on Client site files

- create main App.styles.ts file 

##### `App.styles.js`
```javascript
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
   body {
    position: relative;
  }

  #app {
    border: 1px dotted green;
  }

 etc...
`

export default GlobalStyle
```

- add styles to your main App component

##### `App.tsx`
```javascript
import AppStyle from './App.styles'
```

- then add individual style sheet per file 

##### `ParamQuery.tsx`
```javascript
import * as Styled from './ParamsQuery.styles'

<Styled.Form>
  ...jsx content
<Styled.Form>
```
