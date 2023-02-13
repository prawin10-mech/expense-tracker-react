import "./ExpenseForm.css";
import { useState } from "react";
import ExpenseItems from "../Expenses/ExpenseItems";

const ExpenseForm = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   title: "",
  //   amount: "",
  //   date: "",
  // });

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
    // setUserInput({ ...userInput, title: e.target.value });
  };
  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
    // setUserInput({ ...userInput, amount: e.target.value });
  };
  const sateChangeHandler = (e) => {
    setDate(e.target.value);
    // setUserInput({ ...userInput, date: e.target.value });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(e);
    const expense = {
      title,
      amount,
      date: new Date(date),
    };
    console.log(expense);
    setTitle("");
    setAmount("");
    setDate("");
    return <ExpenseItems {...expense} />;
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-form__controls">
        <div className="new-form__control">
          <label>Title: </label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
        <div className="new-form__control" onChange={amountChangeHandler}>
          <label>Amount: </label>
          <input type="number" min="0.01" step="0.01" value={amount} />
        </div>
        <div className="new-form__control" onChange={sateChangeHandler}>
          <label>Date</label>
          <input type="date" min="2020-01-01" max="2023-02-01" value={date} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">submit</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
