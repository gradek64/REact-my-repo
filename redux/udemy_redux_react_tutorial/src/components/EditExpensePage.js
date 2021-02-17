import React from 'react';
import ExpenseForm from './ExpenseForm';

const EditExpensePage = (props) => {
  console.log(props);
  return (
    <div>
      Editing the expense with id of {props.match.params.id}!!
      <ExpenseForm myProp='myProp'/>
    </div>
  );
};

export default EditExpensePage;
