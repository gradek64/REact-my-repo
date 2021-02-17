import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = () => (
  <div>
    <h2>ExpenseList</h2>
    <ExpenseListFilters/>
    <ExpenseList />
    <h2>....ExpenseList</h2>
  </div>
);

export default ExpenseDashboardPage;
