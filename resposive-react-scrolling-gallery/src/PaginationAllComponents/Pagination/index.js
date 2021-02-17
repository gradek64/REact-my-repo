import React from 'react';
import PropTypes from 'prop-types';
// custom
import './pagination.scss';


const Pagination = ({ howMany, eventHandler }) => (
  <div>
    {
      Array.from({ length: howMany }, (x, i) => (
        <button
          key={`ball${i}`}
          type="button"
          className="ball"
          onClick={() => { eventHandler(i); }}
        >
          {i + 1}
        </button>
      ))
    }
  </div>);

Pagination.propTypes = {
  howMany: PropTypes.number.isRequired,
  eventHandler: PropTypes.func.isRequired,
};

export default Pagination;
