import React from 'react';

/*
    the only way to load images with dynamicly generated filenames is by
    moduld called npm i --save require-context
    it allows to load images/files once the file is requested on the runtime;
*/
const icons = ['atomicjolt.jpg', 'atomicjolt.jpg'];
const imgs = ['favicon.png', 'favicon.png'];

/*
    require.context  takes 3 parameters: 
    path to assets: (required)
    look recursivelly (boolean optional)
    look for files (regex optional)

    it creates a function that has to be called with at least one parameter
    which is the path to the file but is has to be in format of './' for not recursive files
    and or './nestedPath/ for recursive files search
    req(`./${icon}`)

    then you can access those:

    req.keys(); // ["./demo.jpg", "./another-demo.jpg"]
    req.id; // 42

*/
const loadContext = require.context('../assets', true, /^\.\//);
const loadContextNonRecursive = require.context('../favicon', false);

const DynamicImagesLoad = () => (
  <React.Fragment>
    {icons.map((icon, i) => (
      <img src={loadContext(`./images/${icon}`)} alt="test" key={i} />
    ))}
    {imgs.map((icon, i) => (
      <img src={loadContextNonRecursive(`./${icon}`)} alt="test" key={i} />
    ))}
  </React.Fragment>
);

export default DynamicImagesLoad;
