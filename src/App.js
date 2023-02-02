import ExpenseItems from "./components/ExpenseItems";

function App() {
  const expenses = [
    {
      id: 1,
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
  return (
    <>
      <h1>Expense Items</h1>
      {expenses.map((expense) => {
        return <ExpenseItems {...expense} />;
      })}
    </>
  );
}

export default App;
