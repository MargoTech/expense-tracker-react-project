import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useExpenses } from "../context/ExpenseContext";

const COLORS_EXPENSE = ["#EF4444", "#F97316", "#FACC15", "#DC2626"];
const COLOR_INCOME = "#10B981";

const ExpenseChart = () => {
  const { expenses } = useExpenses();

  const categories = ["Food", "Transport", "Activities", "Other"];

  const expenseData = categories.map((cat) => {
    const total = expenses
      .filter((exp) => exp.category === cat)
      .reduce((sum, exp) => sum + exp.amount, 0);
    return { name: cat, value: total };
  });

  const totalIncome = expenses
    .filter((e) => e.type === "income")
    .reduce((sum, e) => sum + e.amount, 0);

  const incomeData = [{ name: "Income", value: totalIncome }];

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-4 mt-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
        Income vs Expenses
      </h2>

      <ResponsiveContainer width="100%" height={350}>
        <PieChart>
          <Pie
            data={expenseData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={120}
            label
          >
            {expenseData.map((_, index) => (
              <Cell
                key={`exp-${index}`}
                fill={COLORS_EXPENSE[index % COLORS_EXPENSE.length]}
              />
            ))}
          </Pie>

          <Pie
            data={incomeData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
          >
            {incomeData.map((_, index) => (
              <Cell fill={COLOR_INCOME} />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>

      <div className="flex justify-center gap-8 mt-4">
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 bg-blue-500 rounded-full"></span>
          <span className="text-sm text-gray-700 dark:text-gray-200">
            Income
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 bg-red-500 rounded-full"></span>
          <span className="text-sm text-gray-700 dark:text-gray-200">
            Expenses
          </span>
        </div>
      </div>
    </div>
  );
};

export default ExpenseChart;
