import Chart from './Chart';

function ChartExpense(props) {

    // datapoints for chart
    let chartDatapoints = [
        { label: 'January', value: 0 },
        { label: 'February', value: 0 },
        { label: 'March', value: 0 },
        { label: 'April', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'July', value: 0 },
        { label: 'August', value: 0 },
        { label: 'September', value: 0 },
        { label: 'Octomber', value: 0 },
        { label: 'November', value: 0 },
        { label: 'December', value: 0 }
    ];
    
    // change the value according to expenses amount of that month
    for (const expense of props.items) {
        const month = expense.date.getMonth();
        chartDatapoints[month].value += expense.amount;
    }

    return (
        <Chart datapoints={chartDatapoints}/>
    );
}

export default ChartExpense;
