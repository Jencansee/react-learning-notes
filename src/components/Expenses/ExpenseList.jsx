import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = props => {
  // Проверяем наличие контента

  if (props.filteredCards.length === 0) {
    return <h2 className="expenses-list__fallback">No items have been found</h2>
  }

  const itemToRemove = target => {
    props.itemToRemove(target);
  };

  return (
    <ul className="expenses-list">
        { props.filteredCards.map(el => (
          <ExpenseItem title={el.title} price={el.amount} key={el.id} itemId={el.id} date={el.date}
            itemToRemove={itemToRemove}
          />
        )) }
    </ul>
  )
};

export default ExpenseList;