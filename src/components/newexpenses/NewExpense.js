import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

// this expense is arriving from ExpenseForm
const getNewExpense = (expense) =>{
    console.log(expense);
}

function NewExpense(){
    return( 
        <div className="new-expense">
            <ExpenseForm onFormSubmit={getNewExpense}/>
        </div>
    )
}

export default NewExpense;