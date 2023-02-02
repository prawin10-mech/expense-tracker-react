function ExpenseDetails({ title, amount, LocationOfExpenditure }) {
  return (
    <div className="expense-item__description">
      <div>{LocationOfExpenditure}</div>
      <h2>{title}</h2>
      <div className="expense-item__price">{amount}</div>
    </div>
  );
}

export default ExpenseDetails;
