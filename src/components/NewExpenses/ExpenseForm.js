import "./ExpenseForm.css";

const ExpenseForm = () => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <form onChange={handleChange}>
      <div className="new-form__controls">
        <div className="new-form__control">
          <label>Title: </label>
          <input type="text" />
        </div>
        <div className="new-form__control" onChange={handleChange}>
          <label>Amount: </label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-form__control" onChange={handleChange}>
          <label>Date</label>
          <input type="date" min="2020-01-01" max="2023-02-01" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">submit</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
