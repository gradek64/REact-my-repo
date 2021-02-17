import React from 'react';
import PropTypes from 'prop-types';

const Congrats = (props)=> {

    if (props.message){
        return (
            <div data-test='Congrats-message'>
                <h1>Congrats U have one {props.message}</h1>      
            </div>
        );
    }else {
        return <div data-test='Congrats-message'/>;
    }
};

Congrats.propTypes = {
    message: PropTypes.string.isRequired
};


export default Congrats;
