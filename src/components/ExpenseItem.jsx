// import React from 'react';

// export default function ExpenseItem(props) {
//   const { title, amount } = props;
//   const type = amount > 0 ? "income" : "expense";
  
// const handleDelete = () => {
//     console.log("Deleting expense with id:", _id); // Debugging line
//     deleteExpense(expense._id); // Use the _id directly from the expense object
//   };
//   /* const handleDelete = () => {
//     props.deleteExpense(props.id);
//   } */
//   const handleEdit = () => {
//     props.setItemToEdit(props.expense)
//   }
//   return (
//     <>
//       <div className={`expense-item ${type}`}>
//         <div className="expense-title">{title}</div>
//         <div className="expense-amount">{amount}</div>
//         <div className='delete-button-overlay'>
//           <button onClick={handleEdit}>Edit</button>
//           <button onClick ={handleDelete}>Delete</button>
//         </div>
//       </div>
//     </>
//   );
// }



import React from 'react';

export default function ExpenseItem(props) {
  const { expense, deleteExpense, setItemToEdit } = props;
  const { _id, title, amount } = expense;  // <-- Proper destructuring here
  const type = amount > 0 ? "income" : "expense";

  const handleDelete = () => {
    console.log("Deleting expense with id:", _id); 
    deleteExpense(_id); // Now _id is defined properly
  };

  const handleEdit = () => {
    setItemToEdit(expense);
  };

  return (
    <>
      <div className={`expense-item ${type}`}>
        <div className="expense-title">{title}</div>
        <div className="expense-amount">{Math.abs(amount)}</div>
        <div className='delete-button-overlay'>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </>
  );
}
