'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import ToggleButton from './ToggleButton.js';

const Mistery = (props) => <div><span>here is a span</span> {console.log(props)} </div>

const Picture = (props) => {
  return (
    <div>

     <p>paragraph</p>
       
    </div>
  )
}

const value = 'value';

class MyContainer extends React.Component {
    constructor(props) {
      super(props);
      this.state = { current: false };

      console.log('MyContainer childrena', props);
    }
    onChildChanged(newState) {

      console.log(newState);
      this.setState({ current: newState });
    }
    render() { 
        return (
          <div>
          {console.log(React.Children.count())}
             <div>Are you checked ? {this.state.current ? 'ON' : 'OFF'}</div>
             <Mistery key3={true} src={false} />
             <Picture key1={value} src1={false} />
             <ToggleButton 
                      initialSet={this.state.set}
                      callbackParent={(newState) => this.onChildChanged(newState) } />
            <ToggleButton 
                      initialSet={true} 
                      callbackParent={(newState) => this.onChildChanged(newState) } />
          </div>
        )
    }
}

/*
    React.createClass has been deprecated from version 16 onwards 

var MyChild = React.createClass({
  render: function() {
    return <div>this is child</div>
  }
});*/



ReactDOM.render(
  <MyContainer/>,
  document.getElementById('app')
);
/* */