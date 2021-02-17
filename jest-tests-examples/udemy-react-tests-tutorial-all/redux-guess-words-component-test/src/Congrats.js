import React from 'react';
import PropTypes from 'prop-types';

const Congrats = (props)=> {

    if (props.success){
        return (
            <div data-test='Congrats-message'>
                <h1>Congrats U have one</h1>      
            </div>
        );
    }else {
        return <div data-test='Congrats-message'/>;
    }
};

Congrats.propTypes = {
    success: PropTypes.bool.isRequired
};


export default Congrats;
