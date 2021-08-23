import { useRef, useState } from 'react';
import styled from 'styled-components';
import { StyledButton, StyledButtonCancel } from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

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

const ExpenseForm = props => {
  const titleInputRef   = useRef(),
        amountInputRef  = useRef(),
        dateInputRef    = useRef();

  const [error, setError] = useState();
  
  // функция сабмита
  const submitHandler = e => {
    e.preventDefault();

    let title = titleInputRef.current.value,
        amount =  amountInputRef.current.value,
        dateCurrentValue   =  dateInputRef.current.value;


    if(title.trim().length === 0) {
      setError({ title: 'Invalid input', description: 'Title can\'t be empty' });
      return;
    }

    if (+amount === 0 || +amount < 0) {
      setError({ title: 'Invalid number inside of Amount', description: 'Expense amount cannot be less than or equal 0' });
      return;
    }

    if (dateCurrentValue === '') {
      setError({ title: 'Date is a required field', description: 'Date cannot be empty, please select date' });
      return;
    }

    let date = new Date(dateCurrentValue);
    props.onSaveExpenseData({title, amount, date}); // Передаем родителю

    props.toggleAdding();
  };

  // Закрыть модалку
  const closeModal = () => setError(null);

  return (
    //short syntax for <React.Fragment> below (it doesn’t support keys or attributes)
    <>
      {error && <ErrorModal closeModal={closeModal} title={error.title} content={error.description} modal="1" />}
      <form onSubmit={submitHandler}>
        <ExpenseControlsWrapper>
          <ExpenseControl>
            <label htmlFor="title-form">Title</label>
            <input ref={titleInputRef} type="text" name="title-form" id="title-form" />
          </ExpenseControl>
    
          <ExpenseControl>
            <label htmlFor="amount-form">Amount</label>
            <input ref={amountInputRef} type="number" name="amount-form" id="amount-form" min="0.01" step="0.01" />
          </ExpenseControl>
    
          <ExpenseControl>
            <label htmlFor="amount-date">Date</label>
            <input ref={dateInputRef} type="date" name="amount-date" id="amount-date" min="2019-01-01" step="2022-12-31" />
          </ExpenseControl>
        </ExpenseControlsWrapper>
        <ExpenseActions>
          <StyledButtonCancel type="submit" onClick={props.toggleAdding}>Cancel</StyledButtonCancel>
          <StyledButton type="submit">Add Expense</StyledButton>
        </ExpenseActions>
      </form>
    </>
  );
}

export default ExpenseForm;