import React, { useState } from 'react'

export default function ExpenseForm(props) {
  const[title,setTitle]=useState("");
  const[amount,setAmount]=useState("")  
  const[error,setError]=useState("")

  const isEdit=props.itemToEdit;

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!title){
      setError("Enter title");
      return;
    }
    if(!amount){
      setError("Enter amount");
      return;
    }
    if(isEdit) {
      props.editExpense(isEdit._id, title, amount);
    } else {
      props.addExpense(title,amount);
    }
    //props.setExpenses(title,amount)
    console.log(title,amount);
    setTitle("")
    setAmount("")
    setError("")
  }
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }
  
  const handleAmountChange = (e) => {
    setAmount(Number(e.target.value))
  }
  const handleClear = () => {
    props.setItemToEdit(null);
  }
  
  return (
    <div className="expense-form">
      <h2>{isEdit ? "Edit Expense" : "Add Expense"}</h2>
      {isEdit?<button type='button' onClick={handleClear}>Clear</button>:""}
        <form onSubmit={handleSubmit}>
          
            <div className='form-group'>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" value={title} onChange={handleTitleChange} />
            </div>
            <div className='form-group'>
                <label htmlFor="amount">Amount ($)</label>
                <input type="number" id="amount" name="amount" value={amount} onChange={handleAmountChange} />
            </div>
            {error&&<div className='error'>{error}</div>}

            <br />
            <button type="submit">{isEdit ? "UPDATE EXPENSE" : "ADD EXPENSE"}</button>
        </form>


    </div>
  )
}
