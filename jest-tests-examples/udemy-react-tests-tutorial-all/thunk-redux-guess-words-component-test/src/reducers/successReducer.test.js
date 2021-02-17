import { actionTypes } from '../actions';
import successReducer from './successReducer';

test('returns default state to false when no acion passed', ()=>{
    //U need to pass arguments to reducer that is expecting them even 
    //if there is not action Performed
    const stateChanged = successReducer(undefined,{});
    const { success } = stateChanged;
    expect(success).toEqual(false);
});

test('returns state of true when acion type "CORRECT_GUESS" is passed', ()=>{
    const stateChanged = successReducer(undefined, {type: actionTypes.CORRECT_GUESS });
    const { success } = stateChanged;
    expect(success).toEqual(true);
});