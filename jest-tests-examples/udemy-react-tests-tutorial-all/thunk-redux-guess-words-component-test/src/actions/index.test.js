import { correctGuess, actionTypes } from './';


describe('corerect Guess', ()=> {
    test('returns and action with type "correctGuess"',()=>{
        const action = correctGuess();
        expect(action).toEqual( { type:actionTypes.CORRECT_GUESS });
    });
});