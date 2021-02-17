import { actionTypes } from '../actions';


/*
 * @function successReducer;
 * @param {array} state - null before reqeusting API call;
 * @param {object} action - action to be reduced;
 *@return {sting} - response from the server with a secret word;
*/

export default (state = null, action={})=> {
    switch(action.type){
    case(actionTypes.SET_SECRET_WORD):
        return action.payload;
    default:
        return state;
    }
};  