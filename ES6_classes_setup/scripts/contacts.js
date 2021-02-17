import React, { Component } from "react";
// import ReactDOM from "react-dom";




class Contacts extends React.Component {
  constructor(props) {
    super(props);
    console.log('this', this);

    //attach handle click to Contacts Class;
    this.handleClick = this.handleClick.bind(this);
  }
  method() {
    console.log('Contacts method', this);
  }
  handleClick(evt) {
     console.log(evt.type); 
     console.log(evt.target);
     console.log(evt.pageX); 
     console.log(evt.pageY); 


     //evet object is pretty much the same
     //but for mouseX 


     //React decided to skip this keword for event handlers 
     //unless you bind it to whatever  you want like this class;
     console.log(this); // React Component instance
  }
  render() {
    return (
      <div onClick={this.handleClick}>click me!</div>
    );
  }
}

//instance of Contacts;
const contacts = new Contacts();
contacts.method();
console.log(contacts);

export default Contacts;