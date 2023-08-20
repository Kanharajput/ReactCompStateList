import ExpenseItem from './components/rendercomp/ExpenseItem'
import Card from './components/ui/Card';
import NewExpense from './components/newexpenses/NewExpense';
import {useState} from 'react';

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


function App() {  
  const [expenses, setExpenses] = useState(initial_expenses);

  const getExpenseFromNewExpense = (expense) => {
    setExpenses([expense, ...expenses]);
  }

  return (
    <Card>
      <NewExpense passExpense={getExpenseFromNewExpense}/>
      {/* map method extract each item of list and let us modify that modify to create something new */}
      {expenses.map((expense) => (<ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}/>))}
    </Card>
  );
}

export default App;
