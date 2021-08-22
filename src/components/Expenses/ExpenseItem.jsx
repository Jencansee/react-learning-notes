import "./ExpenseItem.css";
import ExpenseDate from './ExpenseDate';
import Card from "../UI/Card/Card";

const ExpenseItem = props => {

  const itemToRemove = target => props.itemToRemove(target);

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__desc">
          <div className="expense-item__title-wrapper">
            <h2>{props.title}</h2>
            <p className="expense-item__remove" onClick={() => itemToRemove(props.itemId)}>Delete entry</p>
          </div>
          <div className="expense-item__price">${props.price}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;