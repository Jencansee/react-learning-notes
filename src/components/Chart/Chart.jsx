import ChartBar from './ChartBar';
import styled from 'styled-components';

const StyledChart = styled.div`
  height: 10rem; padding: 1rem; border-radius: 12px; 
  background-color: #f8dfff; display: flex; text-align: center; justify-content: space-around;
`;

const Chart = props => {
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
  const totalMaxVal = Math.max(...dataPointValues);

  return (
    <StyledChart>
      {props.dataPoints.map(dataPoint => 
        <ChartBar key={dataPoint.label}
          value={dataPoint.value} 
          maxValue={totalMaxVal}
          label={dataPoint.label}
        />
      )}
    </StyledChart>
  )
};

export default Chart;