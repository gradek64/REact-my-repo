import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getSecretWord } from './actions';



const Congrats = (props)=> {


    console.log('Congrats component props', props.ss );
    /* if (props.success){
        return (
            <div data-test='Congrats-message'>
                <h1>Congrats U have one</h1>      
            </div>
        );
    }else {*/ 
    return (
        <div data-test='Congrats-message'>
            <h2> Congrats messsage </h2>
            <button 
                onClick = { ()=>{props.getSecretWord();} }
            >launchAPI</button>
        </div>);
    //}
};

Congrats.propTypes = {
    success: PropTypes.bool.isRequired
};


const mapStoreToProps = (store) => {
    /*
    * @return store.reducer given in function args then you will use the same values 
    * as the one used in store (direct mapping);
    */
    console.log('whole store', store);
    return store.success;
};

export default connect(mapStoreToProps,{
    getSecretWord
})(Congrats);

