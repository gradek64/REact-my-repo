import React from 'react';

// custom
import Carusel from '../../../Carusel/Container/CardsContainer';
import PaginationAllComponents from '../../../PaginationAllComponents';


const Home = () => (
  <div>
    <Carusel timer={false} delay={2000} />
    <PaginationAllComponents />
  </div>
);

export default Home;
