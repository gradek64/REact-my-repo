import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  Congrats from './Congrats';
import  GuessWords from './GuessWords';
import  InputWord from './InputWord';

class App extends Component {
    render() {
        return (
            <div className="App">
                <InputWord />
                <Congrats />
                <GuessWords guessWords={[]} />
            </div>
        );
    }
}

export default App;
