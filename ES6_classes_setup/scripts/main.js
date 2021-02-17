'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Contacts from './contacts.js';

class App {

   constructor(){

   }

   static getValue() {
      return "Hello";
   }

   method(){
   	console.log('class APP method', this);
   }
};

class AppChild extends App {
   constructor(){
   	super();
   }

   
}
//APP instance 
const appchild = new AppChild();
appchild.method();

const element = (
  <h1>{App.getValue()} 
    <Contacts/>
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('app')
);