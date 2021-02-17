import { actionTypes } from '../actions';


/*
 * @function successReducer;
 * @param {array} state - array of guessed words;
 * @param {object} action - action to be reduced;
 *@return {boolean} - new success state
*/
const initialState = {
    success: false,
    setter:false,
};
export default (state = initialState, action={})=> {
    switch(action.type){
    case(actionTypes.CORRECT_GUESS):
        state.success = true;
        return state;

    default:
        return state;
    }
};