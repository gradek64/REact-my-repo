import { getLetterMatchCount } from '../helperFunctions';
import secretWordService from '../services/secretWordService';


export const actionTypes = {
    CORRECT_GUESS : 'CORRECT_GUESS',
    GUESS_WORD : 'GUESS_WORD',
    SET_SECRET_WORD: 'SET_SECRET_WORD',
};

export function correctGuess() {
    return { type:actionTypes.CORRECT_GUESS };
}

/*
*@for the action now we are going to use 'thunk' 
*it will return a function not an object so it is more veritile
*
*/

export const guessWord = (guessWord) => {

    /*
      *@here we use thunk which is nested function that
      *@has access to dispatch method and to state in its arguments;
    */
    return function(dispath,getState)  {


        //console.log('getState().secretWord;',getState());
        // get a current Store state;


        const secretWord = getState().guessWords.secretWord;
        const letterMatchCount = getLetterMatchCount(guessWord,secretWord);

        //change store state for guessWordReducer;

        dispath({
            type:actionTypes.GUESS_WORD,
            payload:{ guessWord, letterMatchCount }
        });
        
        /*
          *@if guess word is a secret word 
          *@then change success state that resides in successReducer
        */
        if(secretWord === guessWord){
            dispath({
                type:actionTypes.CORRECT_GUESS,
            });
        }


    };
};

export const getSecretWord = () => {
    return async (dispatch)  => {
        const response = await secretWordService().getSecretWord;
        dispatch({
            type: actionTypes.SET_SECRET_WORD,
            //in axios the response is linked to object : data 
            payload:response.data,
        });

        
    };
};
