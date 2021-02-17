import React from 'react';
import PropTypes from 'prop-types';

const SearchBox = ({ eventHandler, placeholder }) => (
  <input
    placeholder={placeholder}
    className="search-box"
    type="text"
    onInput={e => eventHandler(e.target.value)}
  />
);
SearchBox.propTypes = {
  eventHandler: PropTypes.instanceOf(Function).isRequired,
  placeholder: PropTypes.string,
};
SearchBox.defaultProps = {
  placeholder: '',
};

export default SearchBox;
