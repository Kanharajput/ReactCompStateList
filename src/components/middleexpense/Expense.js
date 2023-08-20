import { useState } from 'react';
import ExpenseItem from './../rendercomp/ExpenseItem'
import Card from './../ui/Card';
import NewExpense from './../newexpenses/NewExpense';
import FilterExpense from './../filterexpenses/FilterExpense';

const initial_expenses = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2023, 8, 17)
    },
    {
        id: 'e2',
        title: 'New TV',
        amount: 799.49,
        date: new Date(2023, 8, 17)
    },
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2023, 8, 17)
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2023, 8, 17)
    }
];

function Expense(props){
    const [expenses, setExpenses] = useState(initial_expenses);
    const [defaultYear, setSeletedYear] = useState(2020);

    const getExpenseFromNewExpense = (expense) => {
        setExpenses([expense, ...expenses]);
    }

    function getSelectYear(selectedYear) {
        setSeletedYear(selectedYear);
    }

    return (
        <Card>
            <NewExpense passExpense={getExpenseFromNewExpense} />
            <FilterExpense default={defaultYear} onChangeFilter={getSelectYear} />
            {/* map method extract each item of list and let us modify that modify to create something new */}
            {expenses.map((expense) => (<ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />))}
        </Card>
    );
}

export default Expense;