import React from 'react';
import { connect } from 'react-redux';
import store from './store';

class InputWord extends React.Component {
    render(){

        const contens = this.props.success ? 
            null :
            (
                <form>
                    <input
                        data-test='input-box'
                        id='input-box'
                        type='text'
                        placeholder='enter word'
                    />
                    <button
                        data-test='button-box'
                        id='button-box'
                        type='button'
                        placeholder='enter word'
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
export default connect(mapStoreToProps)(InputWord);