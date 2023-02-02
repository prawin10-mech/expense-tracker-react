import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

const ExpenseItems = (props) => {
  let [title, setTitle] = useState(props.title);
  let [amount, setAmount] = useState(props.amount);
  const handleDelete = (e) => {
    const childNode = e.target.parentNode;
    const parentNode = childNode.parentNode;
    parentNode.removeChild(childNode);
    console.log(childNode);
  };

  const handleTitle = () => {
    setTitle("update");
  };

  const handleAmount = () => {
    setAmount(100);
  };
  return (
    <div className="expense-item" key={props.id}>
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={title}
        amount={amount}
        LocationOfExpenditure={props.LocationOfExpenditure}
      />
      <button onClick={handleAmount}>Update Amount</button>
      <button onClick={handleTitle}>Update Title</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ExpenseItems;
