import { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(){
    // states to store the user inputs
    // const [enteredTitle, setEnteredTitle] = useState('');

    // mulitple inputs are handled by a single state
    const [userInput, setUserInput] = useState({title:'',amount:'',date:''});
    
    // handle all events at once
    const allHandler = (identifier, value) => {
        if(identifier === 'title'){
            setUserInput((prevState) => {
                return ({ ...prevState, title: value });
            });
            console.log(value);
        }
        else if(identifier === 'amount'){
            setUserInput({
                ...userInput,
                amount: value
            });
            console.log(value);
        }
        else{
            setUserInput({
                ...userInput,
                date: value
            });
            console.log(value);
        }
    }

    return(
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title-field">Enter title</label>
                    <input name="title-field" type="text" 
                        onChange={(event) => allHandler('title',event.target.value)}>
                    </input>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="date-field">Enter Amout</label>
                    <input name="date-field" type="number" 
                        onChange={(event) => allHandler('amount', event.target.value)}>
                    </input>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="date-field">Enter Date</label>
                    <input name="date-field" type="date" 
                        onChange={(event) => allHandler('date', event.target.value)}>
                    </input>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    );
}

export default ExpenseForm;