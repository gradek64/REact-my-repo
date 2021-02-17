import React from 'react';

const responsiveImage = require('../favicon/favicon.png?sizes[]=100,sizes[]=200,sizes[]=300');

const GenerateResposiveImages = () => (
  <img srcSet={responsiveImage.srcSet} src={responsiveImage.src} alt="alt" />
);

export default GenerateResposiveImages;
