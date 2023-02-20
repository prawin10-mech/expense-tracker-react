import { useState } from "react";
import ExpenseItems from "./components/Expenses/ExpenseItems";
import "../public/app.css";
import Card from "./components/UI/Card";
import NewExpense from "./components/NewExpenses/NewExpense";
import FilterExpense from "./components/Expenses/FilterExpenses";
import ExpenseChart from "./components/Expenses/ExpensesChart";

const DUMMY_EXPENSES = [
  {
    id: 0,
    title: "Movie veerayya",
    amount: 299,
    date: new Date(2023, 0, 23),
    LocationOfExpenditure: "tanuku",
  },
  {
    id: 2,
    title: "cable bill",
    amount: 550,
    LocationOfExpenditure: "meenavilluru",
    date: new Date(2023, 0, 30),
  },
  {
    id: 3,
    title: "Tiffin",
    amount: 10,
    date: new Date(2023, 1, 02),
    LocationOfExpenditure: "ramachandra puram",
  },
  {
    id: 3,
    title: "Cake",
    amount: 30,
    date: new Date(2023, 0, 31),
    LocationOfExpenditure: "ramachandra puram",
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const addExpenseHandler = (expense) => {
    setExpenses([...expenses, expense]);
  };
  return (
    <>
      <h1>Expense Items</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <FilterExpense
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseChart expenses={expenses} />
      <Card className="container">
        {expenses.map((expense) => {
          return <ExpenseItems {...expense} />;
        })}
      </Card>
    </>
  );
};

export default App;
