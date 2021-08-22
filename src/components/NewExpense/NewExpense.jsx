import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
import { StyledButton } from "../UI/Button";
import styled from "styled-components";

const StyledNewExpense = styled.div`
  background-color: #315C64;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
  padding: 1rem; margin: 2rem auto; width: 50rem;
  max-width: 95%; border-radius: 12px; text-align: center;
`;

const NewExpense = props => {
  const SaveExpenseDataHandler = enteredData => {
    const expenseData = { ...enteredData, id: Math.random().toString() };
    props.expectedExpenseData(expenseData)
  };

  const [toggleState, setToggleState] = useState(false);
  const addExpenseHandler = () => setToggleState(!toggleState);

  return (
    <StyledNewExpense>
      {
        !toggleState ? <StyledButton onClick={addExpenseHandler}>Add expense</StyledButton> 
        : <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} toggleAdding={addExpenseHandler} />
      }
    </StyledNewExpense>
  );
};

export default NewExpense;