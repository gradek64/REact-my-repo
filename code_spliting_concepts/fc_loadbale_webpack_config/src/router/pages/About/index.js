import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="helloworld">
    <h3>this is about</h3>
    <div>
      <Link to="/">home</Link>
    </div>
  </div>
);

export default Home;
