import "./FilterExpense.css";

const FilterExpense = (props) => {
  const dropDownHandler = (e) => {
    props.onChangeFilter(e.target.value);
  };

  return (
    <div className="filterExpense">
      <h2>Filter By Years</h2>
      <select
        className="expenseYear"
        value={props.selected}
        onChange={dropDownHandler}
      >
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
    </div>
  );
};

export default FilterExpense;
