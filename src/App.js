import ExpenseItem from './components/ExpenseItem';
import Card from './components/Card';
import NewExpense from './components/newexpenses/NewExpense';
import {useState} from 'react';

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date : new Date(2023, 8, 17)
    },
    { id: 'e2', 
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
    },
  ]);

  const getExpenseFromNewExpense = (expense) => {
    // convert date string to date object
    let date = new Date(expense.date);
    // replace date string in expense object
    expense.date = date;
    setExpenses(prevExpenses => prevExpenses.push(expense));
    console.log(expenses);
  }

  // now we need code to render the expenses as expenses are stored in list.
  // below code won't work for that
  return (
    <Card>
      <NewExpense passExpense={getExpenseFromNewExpense}/>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} />
    </Card>
  );
}

export default App;
