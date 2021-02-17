
/*
  * @connect to store for real app testing purposes;
*/

import { createStore, applyMiddleware } from 'redux';
import { middlewares }from '../store';
import rootReducer from '../reducers';


export const storeFactory = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddleware(rootReducer,initialState);
};