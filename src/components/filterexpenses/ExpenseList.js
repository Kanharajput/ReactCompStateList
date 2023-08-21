import ExpenseItem from './../rendercomp/ExpenseItem';

function ExpenseList(props){

    if (props.items.length === 0) {
        return(
            <div className='expenses-list__fallback'>
            <h2>No Item in the list</h2>
            </div>
        );
    }

    return(
        <ul className='expenses-list'>
            {props.items.map((expense) => (<ExpenseItem
                title={expense.title}
                amount={expense.amount}
                date={expense.date} />))}
        </ul>
    );
}

export default ExpenseList;

