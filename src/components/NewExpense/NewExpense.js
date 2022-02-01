import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
const [isEditing, setIsEditing] = useState(false);

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random.toString()
    };
    
    props.onAddExpense(expenseData);
    setIsEditing(false);
  }

  const statrtEditingHandler = () => setIsEditing(true);

  const stopEditingHandler = () => {
    setIsEditing(false);
  }

  return (
    <div className="new-expense">
      {!isEditing && <button type="button" onClick={statrtEditingHandler} className="new-expense__actions">Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onCancel={stopEditingHandler}/>}
    </div>
  );
};

export default NewExpense;
