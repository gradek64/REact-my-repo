import { storeFactory } from './testHelpers';
import { guessWord } from './actions';
import guessWordReducer from './reducers/guessWordReducer';



describe('guess word action dispacher',()=>{
   
    describe('no guess words',()=>{

        const initialNoGuessState = {
            secretWord:'test',
            collectionOfGuesses:[{
                guessWord:'guessedWord',
                letterMatchCount: 0
            }],
        };
        const store = storeFactory();
        const dispachWordTest = 'GREG';

        const expectedState = {
            secretWord:'test',
            collectionOfGuesses:[
                {
                    guessWord:'guessedWord',
                    letterMatchCount: 0
                },{
                    guessWord:dispachWordTest,
                    letterMatchCount: 1
                }],
        };

        /*
          *@apply test data to the store to see clear data
          *@this your initial test data for store guessWords reducer (no dispatch action yet);
        */
        let storeTestData = store.getState();
        /*
          *@only aplly test data to guessWords reducer;
        */
        storeTestData.guessWords = initialNoGuessState;

        beforeEach(()=>{

            /*
              *@if you need to access stor ewith default value 
              *@them dont core store with mock data at all 
              *@just make sure have default initial data set up.
            */

           

            /*store = storeFactory( noGuessState, {
                secretWord:guessWordReducer, 
                guessedWords:guessWordReducer
            });*/


        });
        test('update store state correctlty if or unsuccessful word',()=>{
            //dispatch event for unsuccessful word;
            store.dispatch(guessWord(dispachWordTest));
            //check store for reducer U are testing;
            console.log('storeAfterAction', store.getState().guessWords);
            const storeAfterAction = store.getState().guessWords;
            expect(storeAfterAction).toEqual(expectedState);
        });
        test('update state correclty for guessed word',()=>{

        });
    });
});