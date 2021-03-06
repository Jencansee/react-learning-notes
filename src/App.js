import React, { useState } from 'react'; // reacts import not required now
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  { id: 'e1', title: 'PS4', amount: 94.12, date: new Date(2020, 7, 14) },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  { id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) },
  { id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const expectedExpenseDataHandler = expectedData => {
    setExpenses(prevState => { return [expectedData, ...prevState] })
  };

  const itemToRemove = target => { 
    expenses.map(el => {
      if (el.id === target) {
        if(expenses.indexOf(el) !== -1) expenses.splice(expenses.indexOf(el), 1)
        setExpenses(() => { return [...expenses] });
      }
      return expenses
    });
  };

  return (
    <div className="App">
      <NewExpense expectedExpenseData={expectedExpenseDataHandler} />
      <Expenses className="expenses" arr={expenses} itemToRemove={itemToRemove} />
    </div>
  );
}

export default App;