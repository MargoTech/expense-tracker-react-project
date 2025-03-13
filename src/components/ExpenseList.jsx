import { useState } from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses, onDeleteExpense, onEditExpense }) => {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editTitle] = useState("");
  const [editAmount, setEditAmount] = useState("");

  return (
    <div className="bg-white shadow-md rounded-lg p-4>
    <h2 className="text-lg font-semibold mb-2">List expenses</h2>
    <ul>
    {expenses.length > 0 ? (
      expenses.map((expense, index) => (
        <ExpenseItem
        key={index} className="expense-item">
          <span>{expense.title}</span>
          <span>{expense.amount} ₽</span>
          <button onClick={() => onEditExpense(index)}>✏️</button>
          <button onClick={() => onDeleteExpense(index)}>Delete</button>
      />
      ))
      ) : (
      <p className="text-gray-500 text-center">Not expenses yet</p>
    )}
        </ul>
    </div>
  );
};

export default ExpenseList;
