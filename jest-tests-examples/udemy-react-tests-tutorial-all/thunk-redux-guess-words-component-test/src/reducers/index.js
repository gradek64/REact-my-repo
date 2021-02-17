import { combineReducers } from 'redux';
import success from './successReducer';
import guessWords from './guessWordReducer';


/*
  *@ below combine reducer will make a store 
  *@ every reduces will make a seperate entry as object property as 
  *@ store = { success:{}, guesWords:{} } 
  *@ for testing it is better to test reducers or do integration test using only 
  *@ the reduceres U need so you dont need to reconstruct your store
  *@ if you already made a test for one reducer U might need a data if you dont test them sepearatelly
*/

export default combineReducers(
    { 
        success,
        guessWords
    }
);