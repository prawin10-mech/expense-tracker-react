import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
    console.log(e.target.value);
  };
  const sateChangeHandler = (e) => {
    setDate(e.target.value);
    console.log(e.target.value);
  };

  return (
    <form>
      <div className="new-form__controls">
        <div className="new-form__control">
          <label>Title: </label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-form__control" onChange={amountChangeHandler}>
          <label>Amount: </label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-form__control" onChange={sateChangeHandler}>
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
