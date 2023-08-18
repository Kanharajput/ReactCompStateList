import { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(){
    // states to store the user inputs
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmout, setEnteredAmout] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // react js pass event to this function 
    // so that we can tackle the 
    const titleHandler = (event) =>{
        console.log(event.target.value);
        setEnteredTitle(event.target.value);
    }
    const AmoutHandler = (event) =>{
        console.log(event.target.value);
        setEnteredAmout(event.target.value);
    }
    const DateHandler = (event) =>{
        console.log(event.target.value);
        setEnteredDate(event.target.value);
    }

    return(
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title-field">Enter title</label>
                    <input name="title-field" type="text" onChange={titleHandler}/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="date-field">Enter Amout</label>
                    <input name="date-field" type="number" onChange={AmoutHandler} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="date-field">Enter Date</label>
                    <input name="date-field" type="date" onChange={DateHandler} />
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    );
}

export default ExpenseForm;