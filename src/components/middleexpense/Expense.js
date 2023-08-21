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

    return (
        <Card>
            <FilterExpense default={defaultYear} onChangeFilter={getSelectYear} />
            {filteredExpenses.length > 1 ? (
                filteredExpenses.map((expense) => (<ExpenseItem
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date} />))
            ): <p>Sorry no items list have only one item</p> }
            
        </Card>
    );
}

export default Expense;