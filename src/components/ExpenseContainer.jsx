import React, { useState,useEffect } from 'react'
import History from './History'
import ExpenseForm from './ExpenseForm';
import BalanceContainer from './BalanceContainer';
import {v4 as uuid} from 'uuid';
const EXPENSES =[
    {
        id : uuid(),
        title:"Expense 1",
        amount:100,
    },
    {
        id:uuid(),
        title:"Expense 2",
        amount:-200,
    }
];



export default function ExpenseContainer() {
  const [expenses,setExpenses] = useState(EXPENSES);
  const [itemToEdit,setItemToEdit]=useState(null)

  //console.log('itemToEdit',itemToEdit)

  const  fetchExpenses = async () => {
    try{
      const response = await fetch('http://localhost:3000/expense');
    const data= await response.json();;
    setExpenses(data);
    }  catch {
      console.log('failed to fetch expenses:',error)
    }

  };
  console.log('expenses')

  useEffect(()=> {
  fetchExpenses();
 },[])
   /*const addExpense=(title,amount) => {
    setExpenses([
      ...expenses,
        {
            id:expenses.length +1,
            title:title, 
            amount:amount,
        }
    ])
  } */

  const addExpense = async (title,amount) => {
    try {
      const response = await fetch('http://localhost:3000/expense', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({title,amount})
      });
      if(response.ok){
        const newItem = await response.json();
        setExpenses((prev) => [...prev,newItem]);
      } else {
        console.error('Failed to add expense')
      }
    }catch(error){
        console.error('Error adding expense:',error)
    }
  }
 /* const editExpense = (id,title,amount) => {
    setExpenses(expenses.map((exp) => {
      if(exp.id === id) {
        return {id,title,amount}
      }
      return exp
    })
  )
    setItemToEdit(null)
  } */
  
  /*const deleteExpense=(id) => {
    setExpenses(expenses.filter(exp=>exp.id != id))
  }*/

  const deleteExpense = async(id) => {
    try{
      const response = await fetch(`http://localhost:3000/expense/${id}`, {
  method: 'DELETE',
});

      if(response.ok){
        await fetchExpenses();
      }else{
        console.error('error ')
      }
    }
    catch(error){
      console.error("ERROR",error)
    }
  }
  const editExpense = async (id, title, amount) => {
  try {
    const response = await fetch(`http://localhost:3000/expense/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, amount }),
    });

    if (response.ok) {
      const updated = await response.json();
      setExpenses((prev) =>
        prev.map((exp) => (exp._id === id ? updated : exp))
      );
      setItemToEdit(null);
    } else {
      console.error('Failed to update expense');
    }
  } catch (error) {
    console.error('Error updating expense:', error);
  }
};

  return (
    <div className='expense-container'>
        <h1>Expense Tracker</h1>
        <BalanceContainer expenses={expenses} />

        <History expenses = {expenses} deleteExpense={deleteExpense} setItemToEdit={setItemToEdit} editExpense={editExpense}/>
        <ExpenseForm 
  addExpense={addExpense} 
  editExpense={editExpense} 
  itemToEdit={itemToEdit}
  setItemToEdit={setItemToEdit}
/>

</div>
  )
}
