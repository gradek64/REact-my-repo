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
                <Congrats success={false}/>
                <GuessWords guessWords={[
                    { guessWord:'train',letterMatchCount:3},
                    { guessWord:'train',letterMatchCount:1},
                    { guessWord:'party',letterMatchCount:5},
                ]} />
            </div>
        );
    }
}

export default App;
