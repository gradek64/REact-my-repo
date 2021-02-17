import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ description, amount, createdAt, id, dispatch }) => {

const removeHandler = (id) => {
  //you have access to dispatch method from store once it is connected;
  dispatch( removeExpense({ id:id }) );
}
return (
  <div>
    <h3>{description}</h3>
    <p>{amount} - {createdAt}</p>
    <button onClick={ ()=>{ removeHandler(id) } }>Remove</button>
  </div>
);
}

export default connect()(ExpenseListItem);

