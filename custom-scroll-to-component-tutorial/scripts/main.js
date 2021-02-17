import React, { Component } from "react";
import ReactDOM from 'react-dom';

import items from "./data.json";

class Main extends Component {

  constructor(){
    super();
    this.imageRefs = [];
  }

  scrollTo(id){
     console.log(id);
      console.log(this.imageRefs[id]);
      this.imageRefs[id].scrollIntoView({ behavior: 'smooth' });
  }

  reference(id){
   
  }

  render() {
    return (
      <div className="app">
           {
          items.map((e,i) => <button key={i}  onClick={() =>{ this.scrollTo(i) } }>{e.id}</button>)
        }
          <div>
            <div className="scroller">
              {items.map(({ name, url },i) => {
                return (
                  <div name={name} key={name} ref={ ref => this.imageRefs[i] = ref }> 
                    <div className="item">
                      <img src={url} />
                      {name}
                    </div>
                  </div>
                );
              })}
            </div>
        </div>
      </div>
    );
  }
}


ReactDOM.render(<Main />, document.getElementById('app'));

