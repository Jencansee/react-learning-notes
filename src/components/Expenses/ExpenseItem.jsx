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
          <h2>{props.title}</h2>
          <p onClick={() => itemToRemove(props.itemId)}>remove this</p>
          <div className="expense-item__price">${props.price}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;