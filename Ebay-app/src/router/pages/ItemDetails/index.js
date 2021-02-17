import React from 'react';
import { Link } from 'react-router-dom';

const ItemDetails = ({ params }) => {
  console.log(params);
  return (<div>
    <Link to="/">{params.id}</Link>
  </div>
  );
};

export default ItemDetails;
