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

    const submitHandler = (event) =>{
        // by default submit will sent request to server to prevent that prevent all defaults.
        event.preventDefault();
        console.log(userInput);
        // must needed to add value tag in form input field 
        // to make them empty when form submit
        setUserInput(()=>{
            return({title: '', amount:'',date:''})
        });
    }

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title-field">Enter title</label>
                    <input name="title-field" type="text" value={userInput.title}
                        onChange={(event) => allHandler('title',event.target.value)}>
                    </input>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="date-field">Enter Amout</label>
                    <input name="date-field" type="number" value={userInput.amount}
                        onChange={(event) => allHandler('amount', event.target.value)}>
                    </input>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="date-field">Enter Date</label>
                    <input name="date-field" type="date"value={userInput.date}
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