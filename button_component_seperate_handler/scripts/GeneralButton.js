import React from 'react';

const GeneralButton = (props) => {
    const { callParent, label } = props;
    return (
        <button onClick={()=>callParent(label)}>{ label }</button>
    );
};

export default GeneralButton; 
