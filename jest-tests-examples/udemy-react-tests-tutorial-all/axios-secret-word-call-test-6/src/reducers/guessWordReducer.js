import { actionTypes } from '../actions';


/*
 * @function guessWordReducer;
 * @param {array} state - array of guessed words;
 * @param {object} action - action to be reduced;
 *@return {array} - new guess Word state
*/
const initialState = {
    secretWord:'party',
    collectionOfGuesses:[],
};
export default (state = initialState, action={})=> {
    switch(action.type){
    case(actionTypes.GUESS_WORD):
        state.collectionOfGuesses.push(action.payload);
        return {...state,collectionOfGuesses:[...state.collectionOfGuesses]};

    default:
        return state;
    }
};