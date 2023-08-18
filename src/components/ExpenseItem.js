// import css file
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';
import {useState} from 'react';

// all data which we sended by the app component is gathered in one object called properties(props)
// extract the desired data
function ExpenseItem(props){
    // state hook for title 
    const [title, seTitle] = useState(props.title);

    const clickHandler = () =>{
        seTitle("Updated");
    }
    return(
        // return a only single element
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.amount}</div>
                <button onClick={clickHandler}>Change</button>
            </div>
        </Card>
    )
}

export default ExpenseItem;