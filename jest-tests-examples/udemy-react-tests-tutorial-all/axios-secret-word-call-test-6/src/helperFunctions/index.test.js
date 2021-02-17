import { getLetterMatchCount } from  '../helperFunctions';

describe('getLetterMatchCount function', ()=>{
    const secretWord = 'party';
    test('return correct count where is no letters match',()=>{
        const getLetterMatchCountCall = getLetterMatchCount('mic',secretWord);
        expect(getLetterMatchCountCall).toBe(0);
    });
    test('return correct count where 3 letters match',()=>{
        const getLetterMatchCountCall = getLetterMatchCount('train',secretWord);
        expect(getLetterMatchCountCall).toBe(3);
    });
    test('return correct count where there are duplicates letters in the guess',()=>{
        const getLetterMatchCountCall = getLetterMatchCount('trainer',secretWord);
        expect(getLetterMatchCountCall).toBe(3);
    });
    test('it will accept CAPITAL input and give correct count',()=>{
        const getLetterMatchCountCall = getLetterMatchCount('TRAIN',secretWord);
        expect(getLetterMatchCountCall).toBe(3);
    });
});