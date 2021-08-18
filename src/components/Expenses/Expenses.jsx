import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card/Card';
import ExpensesFilter from './ExpensesFIlter';
import { useState } from 'react';

const Expenses = props => {
  // Хуки могут вызываться только здесь, не выше, не ниже с один исключением
  const [expencesYear, setExpencesYear] = useState('2021');

  const expectedFilterYear = expectedData => {
    setExpencesYear(expectedData);
  };

  const filteredCards = props.arr.filter(expense => {
    return expense.date.getFullYear().toString() === expencesYear;
  })

  return (
    <Card className="expenses"> 
      <ExpensesFilter selected={expencesYear} onPassingExpensesYear={expectedFilterYear} />
      { 
        filteredCards.map(el => (
          <ExpenseItem title={el.title} price={el.amount} key={el.id} date={el.date} />
        ))
      }
    </Card>
  );
};

export default Expenses;