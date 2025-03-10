import { useState } from "react";

const ExpenseList = ({ expenses, onDeleteExpense, onEditExpense }) => {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editTitle] = useState("");
  const [editAmount, setEditAmount] = useState("");

  return (
    <ul className="expense-list">
      {expenses.length === 0 ? (
        <p>There is not expenses yet</p>
      ) : (
        expenses.map((expense, index) => (
          <li key={index} className="expense-item">
            <span>{expense.title}</span>
            <span>{expense.amount} ₽</span>
            <button onClick={() => onDeleteExpense(index)}>Delete</button>
          </li>
        ))
      )}
    </ul>
  );
};

export default ExpenseList;
