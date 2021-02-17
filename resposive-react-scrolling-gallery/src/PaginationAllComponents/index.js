import React, { useState } from 'react';

// custom
import PaginatedList from './PaginatedList';
import Pagination from './Pagination';
import data from '../data/data';
import Pictures from './List';
import './paginationListContainer.scss';


const { items } = data;
const paginateBy = 7;
const paginationItems = Math.ceil(items.length / paginateBy);

const PagginationAllCompHook = () => {
  const [count, setCount] = useState(0);

  // const getPaginationNumber = num => setCount(num);
  const getPaginationNumber = num => setCount(num);

  return (
    <div className="paginationListContainer">
      <PaginatedList paginateBy={paginateBy} startFrom={count} list={items}>
        {/* Pictures is just accpeting list in props inside PaginatedList
        but it is required so first send it empty */}
        <Pictures list={[]} />
      </PaginatedList>
      <Pagination howMany={paginationItems} eventHandler={getPaginationNumber} />
    </div>
  );
};

export default PagginationAllCompHook;
