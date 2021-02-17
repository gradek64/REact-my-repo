import React, { useEffect } from 'react';

let renderTimes = 0;
const Button = (props) => {
  const { increment, children, forProp } = props;
  useEffect(() => {
    renderTimes = renderTimes + 1;
    console.log(
      '.....Button Rendered for value  :: ' +
        forProp +
        ' ::........' +
        renderTimes
    );
  }, []);

  return (
    <>
      <h6>{`this component has rendered times ${renderTimes} for  ${forProp}`}</h6>
      <button type="button" onClick={increment}>
        {children}
      </button>
    </>
  );
};
export default Button;
