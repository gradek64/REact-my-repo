import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getSecretWord } from './actions';



const Congrats = (props)=> {
    if (props.success){
        return (
            <div>
                <h1>Congrats U have one !</h1>      
            </div>
        );
    } else {
        return null;
    }
};

Congrats.propTypes = {
    success: PropTypes.bool.isRequired
};

export default Congrats;

