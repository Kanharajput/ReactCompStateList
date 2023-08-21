import { useState } from 'react';
import ExpenseItem from './../rendercomp/ExpenseItem'
import Card from './../ui/Card';

import FilterExpense from './../filterexpenses/FilterExpense';



function Expense(props){
    const [defaultYear, setSeletedYear] = useState(2020);

    function getSelectYear(selectedYear) {
        setSeletedYear(selectedYear);
    }

    return (
        <Card>
            <FilterExpense default={defaultYear} onChangeFilter={getSelectYear} />
            {/* map method extract each item of list and let us modify that modify to create something new */}
            {props.items.map((expense) => (<ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />))}
        </Card>
    );
}

export default Expense;