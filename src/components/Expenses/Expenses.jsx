import './Expenses.css';
import Card from '../UI/Card/Card';
import ExpensesFilter from './ExpensesFIlter';
import ExpenseList from './ExpenseList';
import { useState } from 'react';
import ExpensesChart from './ExpensesChart';

const Expenses = props => {
  // Хуки могут вызываться только здесь, не выше, не ниже с один исключением
  const [expencesYear, setExpencesYear] = useState('2021');

  const itemToRemove = target => props.itemToRemove(target);

  const expectedFilterYear = expectedData => {
    setExpencesYear(expectedData);
  };

  const filteredCards = props.arr.filter(expense => {
    return expense.date.getFullYear().toString() === expencesYear;
  })

  return (
    <Card className="expenses"> 
      <ExpensesFilter selected={expencesYear} onPassingExpensesYear={expectedFilterYear} />
      <ExpensesChart expenses={filteredCards} />
      <ExpenseList filteredCards={filteredCards} itemToRemove={itemToRemove} />
    </Card>
  );
};

export default Expenses;