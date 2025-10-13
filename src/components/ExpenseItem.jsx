import React, { useCallback } from "react";
import { motion } from "framer-motion";
import { useExpenses } from "../context/ExpenseContext";

const categoryColors = {
  Food: "bg-red-200 text-red-800",
  Transport: "bg-blue-200 text-blue-800",
  Activities: "bg-green-200 text-green-800",
  Other: "bg-gray-200 text-gray-800",
};

const ExpenseItem = ({ expense }) => {
  const { deleteExpense } = useExpenses();

  const handleDelete = useCallback(() => {
    deleteExpense(expense.id);
  }, [deleteExpense, expense.id]);

  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.25 }}
      className={`flex justify-between items-center p-2 rounded-md shadow-md ${categoryClass}`}
    >
      <span className="font-medium">
        {expense.title} - {expense.amount.toLocaleString()}₽ (
        <span className="ml-1 opacity-70 text-sm">({expense.category})</span>)
      </span>

      <div>
        <button
          onClick={handleDelete}
          className="text-red-500 hover:text-red-700 text-lg ml-3"
          title="Delete expense"
        >
          ❌
        </button>
      </div>
    </motion.li>
  );
};

export default React.memo(ExpenseItem);
