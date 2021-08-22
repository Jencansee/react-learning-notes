import styled from "styled-components";
import ExpenseItem from "./ExpenseItem";

const ExpencesList = styled.ul`
  padding: 0; list-style: none;
`, 
ExpencesListFallBack = styled.h2`
  color: #fff; text-align: center;
`;

const ExpenseList = props => {
  
  // Проверяем наличие контента
  if (props.filteredCards.length === 0) {
    return <ExpencesListFallBack>No items have been found</ExpencesListFallBack>
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