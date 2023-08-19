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
    expense.id = '1';
    console.log(expenses);
  }

  // now we need code to render the expenses as expenses are stored in list.
  // below code won't work for that
  return (
    <Card>
      <NewExpense passExpense={getExpenseFromNewExpense}/>
      {/* map method extract each item of list and let us modify that modify to create something new */}
      {expenses.map(expense => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}/>)}
    </Card>
  );
}

export default App;
