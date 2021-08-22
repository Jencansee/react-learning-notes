import styled from 'styled-components';

const StyledExpensesFilter = styled.div`
  color: white; padding: 0 1rem;
  label { font-weight: bold; margin-bottom: 0.5rem; }
  select { font: inherit; padding: 0.5rem 3rem; font-weight: bold; border-radius: 6px; }
`;

const FilterControl = styled.div`
  display: flex; width: 100%; align-items: center; justify-content: space-between; margin: 1rem 0;
`;

const ExpensesFilter = props => {
  const optionSelectedHandler = e => props.onPassingExpensesYear(e.target.value);
  return (
    <StyledExpensesFilter>
      <FilterControl>
        <label>Filter by year</label>
        <select value={props.selected} onChange={optionSelectedHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </FilterControl>
    </StyledExpensesFilter>
  );
};

export default ExpensesFilter;