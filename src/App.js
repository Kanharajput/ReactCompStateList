import Expense from './components/middleexpense/Expense';
import NewExpense from './components/newexpenses/NewExpense';
import {useState} from 'react';

const initial_expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 8, 17)
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2023, 1, 17)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2020, 4, 17)
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 2, 17)
  }
];

function App() { 
  const [expenses, setExpenses] = useState(initial_expenses); 
  
  const getExpenseFromNewExpense = (expense) => {
    setExpenses([expense, ...expenses]);
  }
  
  return(
    <div>
      <NewExpense passExpense={getExpenseFromNewExpense} />
      <Expense items={expenses} />
    </div>
  );
}

export default App;