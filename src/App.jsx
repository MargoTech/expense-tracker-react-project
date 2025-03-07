import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import "./App.css";

const App = () => {
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div className="container">
      <h1>Tracker expenses</h1>
      <ExpenseForm onAddExpense={addExpense} />

      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            <span>{expense.title}</span>
            <span>{expense.amount.toLocaleString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
