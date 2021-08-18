import './ExpenseDate.css'
const ExpenseDate = props => {
  const month = props.date.toLocaleString('en-US', { month: 'long' }),
        year  = props.date.getFullYear(),
        day   = props.date.toLocaleString('en-US', { day: '2-digit' });
        
  return (
    <div className="expense-date">
     <div className="expense-date__month">{month}</div>
     <div className="expense-date__day">{day}</div>
     <div className="expense-date__year">{year}</div>
    </div>
  );
};

export default ExpenseDate;