import React from 'react';
import { connect } from 'react-redux';
import store from './store';
import { guessWord } from './actions';

class InputWord extends React.Component {

    constructor(props){
        super(props);
        this.textInput = React.createRef();
        this.onWordSubmit = this.onWordSubmit.bind(this);
    }
    onWordSubmit(){
        const guessWordInput = this.textInput.current.value;
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
const mapStoreToProps = (store) => {
    /*
    * @return store given in function args then you will use the same values 
    * as the one used in store (direct mapping);
    */
    return store;
};
export default connect(mapStoreToProps,{guessWord})(InputWord);