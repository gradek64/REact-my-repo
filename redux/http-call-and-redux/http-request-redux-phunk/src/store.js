import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';

// custom
import rootReducer from './reducers/products_reducer';

export const store = createStore(
  combineReducers({ products: rootReducer }),
  applyMiddleware(thunk),
);
