import { useState } from 'react';
import styled from 'styled-components';
import { StyledButton, StyledButtonCancel } from '../UI/Button';

const ExpenseControlsWrapper = styled.div`
  display: flex; flex-wrap: wrap; gap: 1rem; margin-bottom: 1rem; text-align: left;
`,

ExpenseControl = styled.div`
  label { font-weight: bold; margin-bottom: 0.5rem; display: block; color: #fff; }
  input { font: inherit; padding: 0.5rem; border-radius: 6px; border: 1px solid #ccc; width: 20rem; max-width: 100%; }
`,

ExpenseActions = styled.div`
  text-align: right; 
`;

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    title: '',
    amount: '',
    enteredDate: '',
    date: ''
  });

  const titleChangeHandler = e => setUserInput(prevState => {
    return { ...prevState, title: e.target.value };
  });

  const amountChangeHandler = e => setUserInput(prevState => {
    return { ...prevState, amount: +e.target.value };
  });

  const dateChangeHandler = e => setUserInput(prevState => {
    return { ...prevState, enteredDate: e.target.value, date: new Date(e.target.value)};
  });
  
  // функция сабмита
  const submitHandler = e => {
    e.preventDefault();
    props.onSaveExpenseData(userInput); // Передаем родителю
    
    // Обнуляем все, мб есть лучше метод?
    setUserInput({title: '', amount: '', enteredDate: '', date: ''});
    props.toggleAdding();
  };

  return (
    <form onSubmit={submitHandler}>
      <ExpenseControlsWrapper>
        <ExpenseControl>
          <label htmlFor="title-form">Title</label>
          <input value={userInput.title} onChange={titleChangeHandler} type="text" name="title-form" id="title-form" />
        </ExpenseControl>

        <ExpenseControl>
          <label htmlFor="amount-form">Amount</label>
          <input value={userInput.amount} onChange={amountChangeHandler} type="number" name="amount-form" id="amount-form" min="0.01" step="0.01" />
        </ExpenseControl>

        <ExpenseControl>
          <label htmlFor="amount-date">Date</label>
          <input value={userInput.enteredDate} onChange={dateChangeHandler} type="date" name="amount-date" id="amount-date" min="2019-01-01" step="2022-12-31" />
        </ExpenseControl>
      </ExpenseControlsWrapper>
      <ExpenseActions>
        <StyledButtonCancel type="submit" onClick={props.toggleAdding}>Cancel</StyledButtonCancel>
        <StyledButton type="submit">Add Expense</StyledButton>
      </ExpenseActions>
    </form>
  );
}

export default ExpenseForm;