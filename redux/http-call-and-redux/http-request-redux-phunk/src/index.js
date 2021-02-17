import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import ProductList from './ProductsList';


const App = () => (
  <Provider store={store}>
    <ProductList />
  </Provider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
