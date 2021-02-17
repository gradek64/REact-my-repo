
/*
  * @connect to store for real app testing purposes;
*/

import rootReducer from '../reducers';
import { createStore } from 'redux';

export const storeFactory = (initialState) => createStore( rootReducer,initialState);