import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const table = (props) => (
    <div data-test='table-component'>
        { props.collectionOfGuesses.map( ({ guessWord, letterMatchCount }, index)=>{
            return (
                <div key={index} data-test='words-rendered'>
                    <span>{guessWord}</span><span>{letterMatchCount}</span>
                </div>
            );
        })
        }   
    </div>
);
const GuessWords = (props)=> {

    console.log('.......props........', props);

    if (props.collectionOfGuesses.length === 0){
        return <p data-test='no-words'> U havent given any words yet </p>; 
    }else {
        return table(props);
    }
};

GuessWords.propTypes = {
    guessWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessWord:PropTypes.string.isRequired,
            letterMatchCount:PropTypes.number.isRequired,
        })
    ).isRequired,
};


const mapStoreToProps = (store) => {
    /*
    * @return store.reducer given in function args then you will use the same values 
    * as the one used in store (direct mapping);
    */
    return store.guessWords;
};
export default connect(mapStoreToProps)(GuessWords);
