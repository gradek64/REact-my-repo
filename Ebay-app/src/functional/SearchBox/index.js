import React from 'react';
import PropTypes from 'prop-types';


const SearchBox = React.forwardRef((props, searchBoxRef) => (
  <input
    type="text"
    id={props.id}
    ref={searchBoxRef}
    onInput={props.onInputHandler}
    className={props.className}
    onKeyDown={(e) => {
      e.key === 'Enter' ? props.submitHandler() : false; props.arrowDownUpHandler(e);
    }
    }
  />
));
export default SearchBox;

SearchBox.propTypes = {
  submitHandler: PropTypes.func.isRequired,
  onInputHandler: PropTypes.func.isRequired,
};
