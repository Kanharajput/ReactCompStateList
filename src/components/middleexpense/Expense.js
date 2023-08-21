import { useState } from 'react';
import ExpenseItem from './../rendercomp/ExpenseItem'
import Card from './../ui/Card';

import FilterExpense from './../filterexpenses/FilterExpense';

function Expense(props){
    const [defaultYear, setSeletedYear] = useState('2020');

    function getSelectYear(selectedYear) {
        setSeletedYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => 
        expense.date.getFullYear().toString() === defaultYear)

    // conditions for rendering expenses
    let expenseToRender = <p>Congrats no expense this year</p>;
    if(filteredExpenses.length > 0){
        expenseToRender = filteredExpenses.map((expense) => (<ExpenseItem
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date} />));
    }

    return (
        <Card>
            <FilterExpense default={defaultYear} onChangeFilter={getSelectYear} />
            {expenseToRender}
        </Card>
    );
}

export default Expense;