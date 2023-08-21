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
            {filteredExpenses.map((expense) => (<ExpenseItem 
                                                            title={expense.title} 
                                                            amount={expense.amount} 
                                                            date={expense.date} />))}
        </Card>
    );
}

export default Expense;