import React from 'react';
import PropTypes from 'prop-types';

// custom
import Card from '../Item/Card';

/* eslint-disable no-underscore-dangle */
const List = ({ list }) => (
  <div className="paginated-list">
    <ul className="cards-slider-inner">
      {
        list.map((item, key) => <Card key={item._id} {...item} />)
      }
    </ul>
  </div>
);

List.propTypes = {
  list: PropTypes.array.isRequired,
};

export default List;
