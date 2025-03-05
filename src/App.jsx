import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import "./App.css";

const App = () => {
  const [expenses, setExpenses] = useState([
    { title: "Coffee", amount: 5 },
    { title: "Taxi", amount: 7 },
  ]);

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
