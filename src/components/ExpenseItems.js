import "./ExpenseItem.css";
function ExpenseItems() {
  const date = new Date();
  const description = "cable bill";
  const price = 25;
  const LocationOfExpenditure = "tanuku";
  return (
    <div className="expense-item">
      <div>{date.toISOString()}</div>
      <div>{LocationOfExpenditure}</div>
      <div className="expense-item__description">
        <h2>{description}</h2>
        <div className="expense-item__price">{price}</div>
      </div>
    </div>
  );
}

export default ExpenseItems;
