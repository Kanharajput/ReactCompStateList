import { useState } from 'react';
import Card from './../ui/Card';
import './css/ExpenseForm.css';

function ExpenseForm(props){
    // mulitple inputs are handled by a single state
    const [userInput, setUserInput] = useState({title:'',amount:'',date:''});

    // to hide and show the form
    const [hideForm, setHideForm] = useState(true);

    // handle all events at once
    const allHandler = (identifier, value) => {
        if(identifier === 'title'){
            setUserInput((prevState) => {
                return ({ ...prevState, title: value });
            });
        }
        else if(identifier === 'amount'){
            setUserInput({
                ...userInput,
                amount: value
            });
        }
        else{
            setUserInput({
                ...userInput,
                date: value
            });
        }
    }

    const submitHandler = (event, identifier) =>{
        if(identifier =='submit'){
            // by default submit will sent request to server to prevent that prevent all defaults.
            event.preventDefault();

            // must needed to add value tag in form input field 
            // to make them empty when form submit
            setUserInput(()=>{
                return({title: '', amount:'',date:''});
            });
            
            const new_expense = {
                id: 1,
                title: userInput.title,
                amount: userInput.amount,
                date: new Date(userInput.date)
            };
            props.onFormSubmit(new_expense);
            setHideForm(true);
        }

        else{
            setHideForm(true);
        }
    }

    // show the form
    const clickHandler = () => {
        setHideForm(false);
    }

    // initially a show a button to add expense
    if (hideForm) {
        return (
            <Card>
                <button onClick={clickHandler}>Add Expense</button>
            </Card>
        );
    }

    return(
        <form>
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
                    <button type="submit" onClick={(e)=> {submitHandler(e,'cancel')}}>Cancel</button>
                </div>
                <div className="new-expense__actions">
                    <button type="submit" onClick={(e) => {submitHandler(e,'submit')}}>Add Expense</button>
                </div>
            </div>
        </form>
    );
}

export default ExpenseForm;