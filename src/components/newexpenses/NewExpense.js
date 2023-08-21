import './css/NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense(props){


    // this expense is arriving from ExpenseForm
    const getNewExpense = (expense) => {
        props.passExpense(expense);
    };

    return( 
        <div className="new-expense">
            <ExpenseForm onFormSubmit={getNewExpense}/>
        </div>
    )
}

export default NewExpense;