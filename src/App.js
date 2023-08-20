import ExpenseItem from './components/rendercomp/ExpenseItem'
import Card from './components/ui/Card';
import NewExpense from './components/newexpenses/NewExpense';
import {useState} from 'react';
import FilterExpense from './components/filterexpenses/FilterExpense';


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
  const [defaultYear, setSeletedYear] = useState(2020);
  let hidden_year = '2021, 2022 & 2023';

  const getExpenseFromNewExpense = (expense) => {
    setExpenses([expense, ...expenses]);
  }

  // this is example of derived or computed state
  // means something which is depend on state, if the state is changed
  // it will also change and also rendered on the ui
  if (defaultYear === '2021') {
    hidden_year = '2020, 2022 & 2023';
  }
  else if (defaultYear === '2022') {
    hidden_year = '2020, 2021 & 2023';
  }
  else {
    hidden_year = '2020, 2021 & 2022';
  }

  function getSelectYear(selectedYear){
    setSeletedYear(selectedYear);
  }

  return (
    <Card>
      <NewExpense passExpense={getExpenseFromNewExpense}/>
      <FilterExpense default = {defaultYear} onChangeFilter={getSelectYear}/>
      <p>This years are hidden {hidden_year}</p>
      {/* map method extract each item of list and let us modify that modify to create something new */}
      {expenses.map((expense) => (<ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}/>))}
    </Card>
  );
}

export default App;
