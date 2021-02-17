import React from 'react';
import PropTypes from 'prop-types';

const Card = ({
  index, picture, city, address, bedrooms, bathrooms, carSpaces,
}) => (
  <li id={`card-${index}`} className="card">
    <img src={picture} alt={city} />
    <div className="details">
      <span className="index">{index + 1}</span>
      <p className="location">
        {city}
        <br />
        {address}
      </p>
      <ul className="features">
        <li className="icon-bed">
          {bedrooms}
          {' '}
          <span>bedrooms</span>
        </li>
        <li className="icon-bath">
          {bathrooms}
          {' '}
          <span>bathrooms</span>
        </li>
        <li className="icon-car">
          {carSpaces}
          {' '}
          <span>parking spots</span>
        </li>
      </ul>
    </div>
  </li>
);

Card.propTypes = {
  index: PropTypes.number.isRequired,
  picture: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  bedrooms: PropTypes.number.isRequired,
  bathrooms: PropTypes.number.isRequired,
  carSpaces: PropTypes.number.isRequired,
};

export default Card;
