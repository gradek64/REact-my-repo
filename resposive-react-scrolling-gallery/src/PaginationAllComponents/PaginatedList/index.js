import React from 'react';
import PropTypes from 'prop-types';


const PaginatedList = ({
  startFrom, paginateBy, list, children,
}) => {
  const filterList = list.filter((x, i) => {
    const range = startFrom !== 0 ? (startFrom * paginateBy) + paginateBy : paginateBy;
    // not neeeded end check const rangeEnd = range < list.length ? range : list.length;
    return i >= startFrom * paginateBy && i < range;
  });

  return (
    <React.Fragment>
      {React.cloneElement(children, { list: filterList })}
      {/* <List list={filterList} /> */}
    </React.Fragment>
  );
};

PaginatedList.propTypes = {
  startFrom: PropTypes.number.isRequired,
  paginateBy: PropTypes.number.isRequired,
  list: PropTypes.array.isRequired,
  children: PropTypes.object.isRequired,
};

export default PaginatedList;
