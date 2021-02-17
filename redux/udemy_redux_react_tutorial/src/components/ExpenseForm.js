import React from 'react';
import { connect } from 'react-redux';

export default class ExpenseForm extends React.Component {

  constructor(props){
    super(props);
   
    this.state = {
      desc:'',
      amount:'',
      note:''
    }
    //air bnb standard;
    this.onChange_desc = this.onChange_desc.bind(this);
  }
  onChange_desc = (handler) => (e) => {
      console.log(handler);
      console.log(e.target.value);
      if(handler==='desc'){
          this.setState({ desc:e.target.value } )
      }
      else if(handler==='amount'){
          const amount = e.target.value;
          //regex Validation
          console.log(/\d+(\.\d{0,2})?$/.test(amount));
          if( /\d+(\.\d{0,2})?$/.test(amount) ) {
               this.setState( ()=>({ amount }) );
          } 
         
      }
      else if(handler==='note'){
          this.setState({ note:e.target.value })
      }
        
  }
  
  render(){
    return(
      <div>
      aga{this.state.desc}
        <h1>ExpenseForm static</h1>
        <input 
          type='text'
          placeholder='description' 
          value={ this.state.desc }
          onChange={this.onChange_desc('desc')}
        />
        <input 
          type='text'
          placeholder='Amount' 
          value={this.state.amount}
          onChange={this.onChange_desc('amount')}
        />
        <textArea
          placeholder='make your note so you wont forget'
          onChange={this.onChange_desc('note')}
        ></textArea>
        <button disabled={ 
            this.state.desc==='' ||
            this.state.amount==='' ||
            this.state.note===''
          } onClick={()=>{console.log(this.state.desc!=='')}}>Add Expenses</button>
    </div>
    );
  }
}
