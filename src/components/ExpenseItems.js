import "./ExpenseItem.css";
function ExpenseItems({ title, date, amount, LocationOfExpenditure }) {
  return (
    <div className="expense-item">
      <div>{date.toISOString()}</div>
      <div>{LocationOfExpenditure}</div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItems;
