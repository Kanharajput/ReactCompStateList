import './ExpenseForm.css';

function ExpenseForm(){
    // react js pass event to this function 
    // so that we can tackle the 
    const titleHandler = (event) =>{
        console.log(event.target.value);
    }

    return(
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label for="title-field">Enter title</label>
                    <input name="title-field" type="text" onChange={titleHandler}/>
                </div>
                <div className="new-expense__control">
                    <label for="date-field">Enter Amout</label>
                    <input name="date-field" type="number" />
                </div>
                <div className="new-expense__control">
                    <label for="date-field">Enter Date</label>
                    <input name="date-field" type="date" />
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    );
}

export default ExpenseForm;