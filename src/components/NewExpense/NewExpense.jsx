import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const SaveExpenseDataHandler = enteredData => {
    const expenseData = { ...enteredData, id: Math.random().toString() };
    props.expectedExpenseData(expenseData)
  };

  const [toggleState, setToggleState] = useState(false);
  const addExpenseHandler = () => setToggleState(!toggleState);

  return (
    <div className="new-expense">
      {
        !toggleState ? <button onClick={addExpenseHandler}>Add expense</button> 
        : <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} toggleAdding={addExpenseHandler} />
      }
    </div>
  );
};

export default NewExpense;