import { useState, useEffect } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    try {
      const storedExpenses = localStorage.getItem("expenses");
      if (storedExpenses) {
        setExpenses(JSON.parse(storedExpenses));
      }
    } catch (error) {
      console.error("Mistake in reading from localStorage:", error);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("expenses", JSON.stringify(expenses));
    } catch (error) {
      console.error("Mistake in reading from localStorage", error);
    }
    }, [expenses]);
    

  const handleAddExpense = (newExpense) => {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };
  
  const handleDeleteExpense = (indexToDelete) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((_, index) => index !== indexToDelete)
    );
  };
  
  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseList
        expenses={expenses}
        onDeleteExpense={handleDeleteExpense}
      />
    </div>
  );
  

  
export default ExpenseTracker;