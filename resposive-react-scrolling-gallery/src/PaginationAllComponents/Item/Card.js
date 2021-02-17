import React from 'react';
import PropTypes from 'prop-types';

const Card = ({
  index, picture, city, address, bedrooms, bathrooms, carSpaces,
}) => (
  <li id={`card-${index}`} className="card">
    <img src={picture} alt={city} />
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
