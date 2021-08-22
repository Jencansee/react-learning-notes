import styled from 'styled-components';

const StyledExpenseDate = styled.div`
  display: flex; align-items: center; justify-content: center; flex-direction: column;
  border: 1px solid #ececec; background-color: #2a2a2a; color: white; border-radius: 12px;
  width: 5.5rem; height: 5.5rem;
`;

const DateEntry = styled.p`
  padding: 0; margin: 0;
  font-size:   ${ props => props.fsize || '0.75rem' };
  font-weight: ${ props => props.fWeight || null };
`;

const ExpenseDate = props => {
  const month = props.date.toLocaleString('en-US', { month: 'long' }),
        year  = props.date.getFullYear(),
        day   = props.date.toLocaleString('en-US', { day: '2-digit' });
        

  return (
    <StyledExpenseDate>
      <DateEntry fWeight="700">{month}</DateEntry>
      <DateEntry fsize="1.5rem" fWeight="700">{day}</DateEntry>
      <DateEntry>{year}</DateEntry>
    </StyledExpenseDate>
  );
};

export default ExpenseDate;