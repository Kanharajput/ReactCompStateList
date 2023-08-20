import './FilterExpense.css';

function FilterExpense(props){

    // sending back data to component which called it
    // to filter the data according to selected year
    const handleDropDown = (event) => {
        props.onChangeFilter(event.target.value);
    }
 
    return(
        <div className="expense-filter">
            <div className="expense-filter__control">
                <label>Filter for year</label>
                <select value={props.default} onChange={handleDropDown}>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                </select>
            </div>
        </div>
    );
}

export default FilterExpense;