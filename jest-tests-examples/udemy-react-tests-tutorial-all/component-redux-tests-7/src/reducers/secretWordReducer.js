import { actionTypes } from '../actions';


/*
 * @function successReducer;
 * @param {array} state - null before reqeusting API call;
 * @param {object} action - action to be reduced;
 *@return {sting} - response from the server with a secret word;
*/

export default (state = {}, action={})=> {
    switch (action.type) {
    case(actionTypes.SET_SECRET_WORD):
        const secretWord = Object.assign(
            action.payload,
            {hiddenWord:'party'});
        return {...state, ...secretWord };
    default:
        return state;
    }
};  
