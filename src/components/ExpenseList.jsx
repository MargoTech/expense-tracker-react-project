import React, { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useExpenses } from "../context/ExpenseContext";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
  const { expenses } = useExpenses();

  const sortedExpenses = useMemo(() => {
    return [...expenses].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  }, [expenses]);

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
        Expense List
      </h2>

      <ul className="flex flex-col gap-2">
        <AnimatePresence>
          {sortedExpenses.length > 0 ? (
            sortedExpenses.map((expense) => (
              <ExpenseItem key={expense.id} expense={expense} />
            ))
          ) : (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-gray-500 dark:text-gray-300 text-center py-4"
            >
              Not expenses yet 💤
            </motion.p>
          )}
        </AnimatePresence>
      </ul>
    </motion.div>
  );
};

export default ExpenseList;
