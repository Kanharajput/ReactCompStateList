// import css file
import './ExpenseItem.css';

function ExpenseItem(){
    const date = new Date(2023,8,17);
    const insrnce_head = "Car Insurance";
    const price = "$294.67";

    return(
        // return a only single element
        <div className="expense-item">
            <div>{date.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{insrnce_head}</h2>
                <div className="expense-item__price">{price}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;