import './ExpenseForm.css';

function ExpenseForm(){
    return(
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label for="title-field">Enter title</label>
                    <input name="title-field" type="text" />
                </div>
                <div className="new-expense__control">
                    <label for="date-field">Enter title</label>
                    <input name="date-field" type="number" />
                </div>
                <div className="new-expense__control">
                    <label for="date-field">Enter title</label>
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