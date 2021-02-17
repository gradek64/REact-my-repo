'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import GeneralButton from './GeneralButton.js';

const handleToggleOutside = (param) => {
    /* this.setState({ set: this.state.set = !this.state.set});
    console.log('this.state.set',this.state.set);
    this.props.callbackParent(this.state.set);*/ // we notify our parent via Class props;

    console.log(param);

};
const MyContainer = () => {
    const [first, second] = ['first', 'second'];
    return (
        <div className="MyContainer">
            { [1,2].map((e)=><GeneralButton key={e} callParent={(param)=>handleToggleOutside(param)} label={first+e} />) }
        </div>
    );
};



ReactDOM.render(
    <MyContainer />,
    document.getElementById('app')
);
/* */