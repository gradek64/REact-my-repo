const getLetterMatchCount = (guessedWord, secretWord) => {
    //use sets for storing values 
    const  guessedWordSet = new Set(guessedWord.toLowerCase().split(''));
    const secretWordSet = new Set(secretWord.toLowerCase().split(''));

    return [...secretWordSet].filter(letter => guessedWordSet.has(letter)).length;
};

export { getLetterMatchCount };