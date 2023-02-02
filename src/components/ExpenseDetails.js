import "./ExpenseDetails.css";
import Card from "./Card";

function ExpenseDetails({ title, amount, LocationOfExpenditure }) {
  return (
    <Card className="expense-item__description">
      <div>{LocationOfExpenditure}</div>
      <h2>{title}</h2>
      <div className="expense-item__price">{amount}</div>
    </Card>
  );
}

export default ExpenseDetails;
