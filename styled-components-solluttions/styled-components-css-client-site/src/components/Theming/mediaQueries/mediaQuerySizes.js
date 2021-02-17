import { css } from "styled-components";
/*
  this is approuch is mobile first that means media query start from mobile 
  min-width tablet and min width desktop 

  there is not need to set min-width since it starts from min-width 0px
*/
const sizes = {
  mobile: 0,
  tablet: 600,
  laptop: 900,
  desktop: 1200
};
const rangesMax = {
  mobile: 600,
  tablet: 900,
  laptop: 1200,
  desktop: 2000
};
export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media only screen and (min-width: ${sizes[
        label
      ]}px) and (max-width: ${rangesMax[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
