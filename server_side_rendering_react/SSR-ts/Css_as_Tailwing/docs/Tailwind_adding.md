
## Before you start 

You are free to add any stylesheet directly in your html head section. This will work, one think to remember is those styles will get overridden in styled Components stylesheets as they are render after. So if you add something to `Body{}` tag the one from styled sheet will be taken. Nevertheless it could be useful to add general library to give overall styling solution up to you.

```script
 <head>
  <link href="./public/css/bootstrap css" />
  <script src="./public/js/bootstrap js"</script>
</head>
```



## Tailwind support

Tailwind does not care about your SSR configuration unlike StyledComponents, therefore the installation/configuration is dead simple and your styling only happens on client site.

###  Steps to implement 
- Install tailwindcss CLI

```script
yarn add tailwindcss -D
```
- Initiate tailwind config file in CLI

```javascript
yarn tailwindcss init
```
- this wil create empty config file, change it to below

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

<div style="border:1px dashed beige; padding:10px;margin:5px">
- Edit `main.css` declared in html markup `<head>` section


ssr.js (html markup)
```html
 <!-- main css file with tailing config inside -->
    <link href="./public/css/main.css" rel="stylesheet">
```

main.css
```javascript
@tailwind base;
@tailwind components;
@tailwind utilities;
```
</div>



- Add compiling script to your scripts for `dev` setup as below, making sure those directories exists `public/css` , `public/dist/css`


package.json
```script
     "dev:compileTaiwind": "npx tailwindcss -i ./public/css/main.css -o ./public/dist/css/mainOutput.css --watch"

```

<div style="border:1px dashed beige; padding:10px">

- Add output file file from CLI to your html markup



ssr.js (html markup)
```html
<!-- tailing output file after compiling -->
   <link href="./public/dist/css/mainOutput.css" rel="stylesheet">
   
```
- Add some tailwind magic in the components

Home.tsx
```javascript
 <h1 className="text-3xl font-bold underline">
      Hello world from Tailwind!
    </h1>
```
</div>
- start your app

```script
yarn && yarn dev
```
