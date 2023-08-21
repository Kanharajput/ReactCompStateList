import { useState } from 'react';
import Card from './../ui/Card';
import ExpenseList from './../filterexpenses/ExpenseList';
import FilterExpense from './../filterexpenses/FilterExpense';
import ChartExpense from './../chart/ChartExpense';

function Expense(props){
    const [filteredYear, setSeletedYear] = useState('2020');

    function getSelectYear(selectedYear) {
        setSeletedYear(selectedYear);
    }

    //  it contains the filtered expenses by user choosed year
    const filteredExpenses = props.items.filter(expense => 
        expense.date.getFullYear().toString() === filteredYear)

    return (
        <Card>
            <FilterExpense default={filteredYear} onChangeFilter={getSelectYear} />
            <ChartExpense items={filteredExpenses} />
            <ExpenseList items={filteredExpenses} />
        </Card>
    );
}

export default Expense;