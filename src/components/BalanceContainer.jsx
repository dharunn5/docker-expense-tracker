import React from 'react'
import CurrencyItem from './CurrencyItem';
import {v4 as uid} from 'uuid';//npm install uuid
export default function BalanceContainer(props) {
  const{expenses} =props;

  const incomeArr= expenses.filter((expense) => expense.amount > 0)
  const expenseArr=expenses.filter((expense) => expense.amount < 0)
  let income = 0;
  let expense = 0
  incomeArr.forEach((item) => {
    income += item.amount;
  })
  expenseArr.forEach((item) => {
    expense += item.amount;
  });
  console.log(income,expense)

  
  
    return (
    <div className='balance-container'>
        <CurrencyItem title="Income" amount={income} type="income" />
        <CurrencyItem title="Expense" amount={expense} type="expense"  />
        <CurrencyItem title="Balance" amount={income+expense} type="balance"  />
    </div>
  )
}
