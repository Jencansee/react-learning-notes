import { useState } from 'react';
import './ExpenseForm.css';

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
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title-form">Title</label>
          <input value={userInput.title} onChange={titleChangeHandler} type="text" name="title-form" id="title-form" />
        </div>

        <div className="new-expense__control">
          <label htmlFor="amount-form">Amount</label>
          <input value={userInput.amount} onChange={amountChangeHandler} type="number" name="amount-form" id="amount-form" min="0.01" step="0.01" />
        </div>

        <div className="new-expense__control">
          <label htmlFor="amount-date">Date</label>
          <input value={userInput.enteredDate} onChange={dateChangeHandler} type="date" name="amount-date" id="amount-date" min="2019-01-01" step="2022-12-31" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={props.toggleAdding}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;