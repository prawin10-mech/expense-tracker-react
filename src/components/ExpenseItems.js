import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

function ExpenseItems({ title, date, amount, LocationOfExpenditure }) {
  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <ExpenseDetails
        title={title}
        amount={amount}
        LocationOfExpenditure={LocationOfExpenditure}
      />
    </div>
  );
}

export default ExpenseItems;
