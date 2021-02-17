import React from 'react';

class InputWord extends React.Component {

    constructor(props){
        super(props);
        this.textInput = React.createRef();
        this.onWordSubmit = this.onWordSubmit.bind(this);
        this.props = props;
    }
    onWordSubmit(){
        const guessWordInput = this.textInput.current.value;
        console.log('his.props InputWord', this.props.guessWord);
        this.props.guessWord(guessWordInput);
    }
    render(){
        const contens = this.props.success===true ? 
            null :
            (
                <form>
                    <input
                        data-test='input-box'
                        id='input-box'
                        type='text'
                        placeholder='enter word'
                        ref={this.textInput}
                    />
                    <button
                        data-test='button-box'
                        id='button-box'
                        type='button'
                        placeholder='enter word'
                        onClick={this.onWordSubmit}

                    >
                    Submit
                    </button>
                </form>
            );

        return (
            <div data-test='InputWord-component'>
                { contens }
            </div>
        );
    }
}

export default InputWord;