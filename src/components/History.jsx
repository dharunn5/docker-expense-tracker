import React from 'react'
import ExpenseItem from './ExpenseItem'

export default function History(props) {//should use return inn map bcoz,it is as function...
  const { expenses, deleteExpense, updateExpense, setItemToEdit} = props;
  
  return (
    <div className='history'>
      <h3>History</h3>
      {expenses.map((expense) => {
        return <ExpenseItem key={expense._id || expense.id} title={expense.title} amount={expense.amount}
        id={expense.id} deleteExpense={props.deleteExpense} updateExpense={updateExpense} setItemToEdit={setItemToEdit} expense={expense}/>
})}
    </div>
  );
}
