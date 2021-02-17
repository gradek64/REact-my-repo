import React from 'react';
import PropTypes from 'prop-types';

/*
  *@this is presentional component
  *@it is pure component that has no login just accepets data from props
*/

const RenderDisplayList = ({ list }) => (
  <div>
    {list.map(char => (
      <div key={char.name}>
        <div>Character: {char.name}</div>
        <div>Side: {char.side}</div>
      </div>
    ))}
  </div>
);
RenderDisplayList.propTypes = {
  list: PropTypes.instanceOf(Array).isRequired,
};

export default RenderDisplayList;
