import './ExpenseDate.css';
function ExpenseDate(props) {
    const year = props.date.getFullYear();
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', {day: '2-digit' });

    return(
        <div className="expense_date">
            <h2>{day}</h2>
            <h2>{month}</h2>
            <h2>{year}</h2>
        </div>
    );
}

export default ExpenseDate;