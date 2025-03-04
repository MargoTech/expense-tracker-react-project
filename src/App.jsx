import React, { useState } from "react";
import Header from "./Header";
import ExpenseForm from "./components/ExpenseForm";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div>
      <Header
        title="Expense Tracker"
        description="Track your expenses easily"
      />
      <main>
        <h2>Your Expenses</h2>
      </main>
    </div>
  );
};

export default App;
