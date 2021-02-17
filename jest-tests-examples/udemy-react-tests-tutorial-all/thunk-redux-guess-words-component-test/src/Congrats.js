import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Congrats = (props)=> {


    console.log('Congrats component props', props.ss );
    /* if (props.success){
        return (
            <div data-test='Congrats-message'>
                <h1>Congrats U have one</h1>      
            </div>
        );
    }else {*/ 
    return <div data-test='Congrats-message'>message: { props.ss } </div>;
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
    return {
        ss:store.success.grab
    };
};

export default connect(mapStoreToProps)(Congrats);

