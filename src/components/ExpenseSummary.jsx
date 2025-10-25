import React, { useMemo } from "react";
import { useExpenses } from "../context/ExpenseContext";

const ExpenseSummary = () => {
  const { expenses } = useExpenses();

  const total = useMemo(
    () => expenses.reduce((sum, exp) => sum + exp.amount, 0),
    [expenses]
  );

  const topCategory = useMemo(() => {
    if (expenses.length === 0) return "-";
    const byCategory = expenses.reduce((acc, exp) => {
      acc[exp.category] = (acc[exp.category] || 0) + exp.amount;
      return acc;
    }, {});
    return Object.entries(byCategory).sort((a, b) => b[1] - a[1])[0][0];
  }, [expenses]);

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-4 mt-6 text-center">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
        Total Expenses
      </h2>
      <p className="text-3xl font-bold text-blue-600">${total.toFixed(2)}</p>
    </div>
  );
};

export default ExpenseSummary;
