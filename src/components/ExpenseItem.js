// import css file
import './ExpenseItem.css';

// all data which we sended by the app component is gathered in one object called properties(props)
// extract the desired data
function ExpenseItem(props){
    return(
        // return a only single element
        <div className="expense-item">
            <div>{props.date.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;