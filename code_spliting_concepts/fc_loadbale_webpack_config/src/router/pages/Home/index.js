import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <p>protected routes /about</p>
    <Link to={`/about`}>/about</Link>
    <p>protected routes /site</p>
    <Link to={`/site`}>/site</Link>
    <p>protected routes items</p>
    {[23, 45, 66].map((num) => (
      <p key={`result${num}`}>
        <Link to={`/item/${num}`}>{`/item/${num}`}</Link>
      </p>
    ))}
  </div>
);

export default Home;
