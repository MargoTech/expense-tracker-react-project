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
      <div>
        <p className="text-gray-500 dark:text-gray-400">Total Expenses</p>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          {new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
          }).format(total)}
        </h2>
      </div>
      <div>
        <p className="text-gray-500 dark:text-gray-400">Number of Entries</p>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          {expenses.length}
        </h2>
      </div>
      <div>
        <p className="text-gray-500 dark:text-gray-400">Top Category</p>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          {topCategory}
        </h2>
      </div>
    </div>
  );
};

export default ExpenseSummary;
