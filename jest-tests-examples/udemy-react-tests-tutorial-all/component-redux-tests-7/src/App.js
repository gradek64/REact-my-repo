import { connect } from 'react-redux';

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  Congrats from './Congrats';
import  GuessWords from './GuessWords';
import  InputWord from './InputWord';
import {guessWord , getSecretWord , correctGuess} from './actions';

class App extends Component {

    constructor(props){
        super(props);
        this.props = props;
    }
    componentDidMount(){
        const { getSecretWord } = this.props;
        /*
        *@launch your secrete word from axios
        *@using getSecretWord store action;
        */
        getSecretWord();
    }
    render() {

        /*
          *@ distructure your reducers from store to pass them to 
          *@ commponent is props
        */

        const { success, guessWords , secretWord, submitWord} = this.props;
        const { collectionOfGuesses } = guessWords;
        /*
          *@get secret word in view 
          *@and distructure to get only the part U need;
        */
        const { hiddenWord } = secretWord;
        return (
            <div className="App">
                <h2> my secret word cheeat: { hiddenWord  }</h2>
                <Congrats success={ success.success }/>
                <InputWord success={ success.success } guessWord = { submitWord }/>
                <GuessWords guessWords={ collectionOfGuesses } />
            </div>
        );
    }
}
const mapStoreToProps = (store) => {
    /*
    * @return store.reducer given in function args then you will use the same values 
    * as the one used in store (direct mapping);
    */
    return store;
};

const mapDispatchToProps = (dispatch) => {
    return {
        submitWord: (word) => dispatch(guessWord(word)),
        correctGuess, //is not being used in view just for refference not sure it is good practice;
        getSecretWord: () => dispatch(getSecretWord()),
    };
};
export default connect(mapStoreToProps, mapDispatchToProps)(App);

