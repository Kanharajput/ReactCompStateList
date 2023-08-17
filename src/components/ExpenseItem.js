// import css file
import './ExpenseItem.css';

// all data which we sended by the app component is gathered in one object called properties(props)
// extract the desired data
function ExpenseItem(props){
    const year = props.date.getFullYear();
    const month = props.date.toLocaleString('en-US',{month: 'long'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    return(
        // return a only single element
        <div className="expense-item">
            <div>
                <div>{day}</div>
                <div>{month}</div>
                <div>{year}</div>
            </div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;