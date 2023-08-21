import './css/Chart.css';
import ChartBar from './ChartBar';

function Chart(props){
    return (
        <div className='chart'>
            {props.datapoints.map(datapoint => (
                <ChartBar 
                    value={datapoint.value}
                    maxValue={null}
                    label={datapoint.label}/>
            ))}
        </div>
    );
}

export default Chart;