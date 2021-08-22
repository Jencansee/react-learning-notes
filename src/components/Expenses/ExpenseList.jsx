import styled from "styled-components";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = props => {

  const ExpencesList = styled.ul`
    padding: ${ props.filteredCards.length > 0 ? '0' : null };
    list-style: ${ props.filteredCards.length > 0 ? 'none' : null };
    
    // Стили для as h2
    color: ${ props.filteredCards.length === 0 ? 'white' : null };
    text-align: ${ props.filteredCards.length === 0 ? 'center' : null };
  `;
  
  
  
  // Проверяем наличие контента
  if (props.filteredCards.length === 0) {
    return <ExpencesList as="h2">No items have been found</ExpencesList>
  }
  
  const itemToRemove = target => props.itemToRemove(target);

  return (
    <ExpencesList>
        { props.filteredCards.map(el => (
          <ExpenseItem title={el.title} price={el.amount} key={el.id} itemId={el.id} date={el.date}
            itemToRemove={itemToRemove}
          />
        )) }
    </ExpencesList>
  )
};

export default ExpenseList;