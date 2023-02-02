import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

const ExpenseItems = ({ id, title, date, amount, LocationOfExpenditure }) => {
  const handleDelete = (e) => {
    const childNode = e.target.parentNode;
    const parentNode = childNode.parentNode;
    parentNode.removeChild(childNode);
    console.log(childNode);
  };
  return (
    <div className="expense-item" key={id}>
      <ExpenseDate date={date} />
      <ExpenseDetails
        title={title}
        amount={amount}
        LocationOfExpenditure={LocationOfExpenditure}
      />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ExpenseItems;
