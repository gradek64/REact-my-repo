import React from 'react';


export default  (props) => {
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