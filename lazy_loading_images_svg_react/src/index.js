import React from 'react';
import ReactDOM from 'react-dom';

// custom
import LazyLoadElement from './LazyLoading/LazyLoad';
import './javascript_observer/watch_scroll_js_observer';

/*
    it doesnt matter how big is width and height
    all is imporant is the ratio so any division
    gives you 1.5 will be fine for placeholder
*/
const sampleImage = {
  url: 'image1.jpeg',
  width: 75,
  height: 50,
  alt: 'sample image'
};
const sampleSVG = {
  url: 'lazy-load.svg',
  width: 75,
  height: 50,
  alt: 'sample svg'
};

const Index = () => (
  <div className="helloworld">
    <h2>Weclcome to webpack 4 and babel7</h2>
    <LazyLoadElement tag="img" source={sampleImage} />
    <LazyLoadElement tag="img" source={sampleImage} />
    <LazyLoadElement tag="img" source={sampleImage} passClass="lazy" />
    <LazyLoadElement tag="img" source={sampleImage} passClass="lazy" />
    <LazyLoadElement tag="imageSVG" source={sampleSVG} passClass="lazy" />
    {/*SVGDynamic is used by react-inlinesvg and it doenst work with lazy loading */}
    <LazyLoadElement tag="SVGDynamic" source={sampleSVG} />
    <LazyLoadElement tag="NativeSVG" source={sampleSVG} passClass="lazy" />
    <LazyLoadElement tag="img" source={sampleImage} passClass="lazy" />
    <LazyLoadElement tag="img" source={sampleImage} passClass="lazy" />
    <LazyLoadElement tag="img" source={sampleImage} passClass="lazy" />
    <LazyLoadElement tag="img" source={sampleImage} passClass="lazy" />
    <LazyLoadElement tag="img" source={sampleImage} passClass="lazy" />
  </div>
);

ReactDOM.render(<Index />, document.querySelector('#root'));
