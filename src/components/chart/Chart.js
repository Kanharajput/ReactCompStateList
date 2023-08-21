import './css/Chart.css';
import ChartBar from './ChartBar';

function Chart(props){

    // this are the values of 12 months
    const valuesList = props.datapoints.map(datapoint => datapoint.value);

    // find the max value of this values as arg
    const maxValue = Math.max(...valuesList);

    return (
        <div className='chart'>
            {props.datapoints.map(datapoint => (
                <ChartBar
                    value={datapoint.value}
                    maxValue={maxValue}
                    label={datapoint.label}/>
            ))}
        </div>
    );
}

export default Chart;