import React from 'react';

import ExpenseForm from './ExpenseForm';
import './Expenses.css';

const Expense = () => {
  return (
    <div className='new-expense'>
      <ExpenseForm />
    </div>
  );
};

export default Expense;