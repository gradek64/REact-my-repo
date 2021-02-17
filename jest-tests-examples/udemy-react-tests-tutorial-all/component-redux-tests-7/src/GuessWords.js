import React from 'react';
import PropTypes from 'prop-types';

const table = (props) => (
    <div data-test='table-component'>
        { props.guessWords.map( ({ guessWord, letterMatchCount }, index)=>{
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
    if (props.guessWords.length === 0){
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

export default GuessWords;
