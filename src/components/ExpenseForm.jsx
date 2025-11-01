import React, { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { useExpenses } from "../context/ExpenseContext";
import { useExpenseForm } from "../hooks/useExpenseForm";

const MotionInput = (props) => (
  <motion.input
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3 }}
    {...props}
  />
);

const ExpenseForm = () => {
  const { addExpense } = useExpenses();
  const { form, handleChange, resetForm, isValid } = useExpenseForm();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!isValid()) return;

      const newExpense = {
        id: crypto.randomUUID(),
        title: form.title.trim(),
        amount: parseFloat(form.amount),
        category: form.category,
        type: form.type,
        createdAt: new Date().toISOString(),
      };

      addExpense(newExpense);
      resetForm();
    },
    [isValid, addExpense, resetForm, form]
  );

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 flex flex-col gap-4 w-full max-w-md mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className="text-2xl font-semibold text-gray-800 dark:text-white mb-2"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        Add New Record
      </motion.h2>
      <MotionInput
        name="title"
        type="text"
        placeholder="Name of record"
        value={form.title}
        onChange={handleChange}
        className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <MotionInput
        name="amount"
        type="number"
        placeholder="Amount"
        value={form.amount}
        onChange={handleChange}
        className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <motion.select
        name="type"
        value={form.type}
        onChange={handleChange}
        className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </motion.select>

      <motion.select
        name="category"
        value={form.category}
        onChange={handleChange}
        className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option>Food</option>
        <option>Transport</option>
        <option>Activities</option>
        <option>Other</option>
      </motion.select>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
      >
        Add
      </motion.button>
    </motion.form>
  );
};

export default React.memo(ExpenseForm);
