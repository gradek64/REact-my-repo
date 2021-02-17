import React from 'react';
// module for generating dynamic <svg>
import GenerateDynamicSVG from 'react-inlinesvg';

// css
import './lazy-loading.css';

/*
    ----- IMPORTANT----
  U CAN ONLY DECALRE ONE :  require.context('../myIcons/', false);
  Therefore all your assets as jpgs,svgs, fonts have to have one common parrent
  this is a drawback but works ok for developemnt U should find better sollutions
  for production to organize your assets the way U want not as it is required by request.context
*/
const pathToAssets = require.context('../assets/', false);

// const myIcons = require.context('svg-inline-loader?classPrefix!../myIcons/');

const LazyLoad = props => {
  const placeholderSrc = ({ source }) => {
    const { width, height } = source;
    return `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}"%3E%3C/svg%3E`;
  };
  const { tag, source, passClass } = props;
  const { url } = source;
  return (
    <React.Fragment>
      {
        {
          img: (
            // regular image with lazy loading and url pass to it
            <img
              src={passClass ? placeholderSrc(props) : pathToAssets(`./${url}`)}
              className={passClass}
              data-src={pathToAssets(`./${url}`)}
              alt="img"
            />
          ),
          // <img src='somethimg.svg' />
          imageSVG: (
            <img
              src={passClass ? placeholderSrc(props) : pathToAssets(`./${url}`)}
              className={passClass}
              data-src={pathToAssets(`./${url}`)}
              alt="imageSVG"
            />
          ),
          // <img src='somethimg.svg' />
          imageSVGDynamic: (
            <img
              src={passClass ? placeholderSrc(props) : pathToAssets(`./${url}`)}
              className={passClass}
              data-src={pathToAssets(`./${url}`)}
              alt="imageSVGDynamic"
            />
          ),
          // <svg dynamic from 'react-inlinesvg' module />
          SVGDynamic: (
            <GenerateDynamicSVG
              src={passClass ? placeholderSrc(props) : pathToAssets(`./${url}`)}
              className={passClass}
              data-src={pathToAssets(`./${url}`)}
              alt="SVGDynamic"
            />
          ),
          // <svg src='something'/> native SVG tag
          NativeSVG: (
            <svg height="100" width="100">
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="black"
                strokeWidth="3"
                fill="red"
              />
              Sorry, your browser does not support inline SVG.
            </svg>
          )
        }[tag]
      }
    </React.Fragment>
  );
};

export default LazyLoad;
