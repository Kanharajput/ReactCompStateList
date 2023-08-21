import { useState } from 'react';
import Card from './../ui/Card';
import ExpenseList from './../filterexpenses/ExpenseList';


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
            <ExpenseList items={filteredExpenses} />
        </Card>
    );
}

export default Expense;