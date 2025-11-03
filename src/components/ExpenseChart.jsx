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

const COLORS_EXPENSE = ["#FF6384", "#FF9F40", "#FFCD56", "#FF6384"];
const COLORS_INCOME = ["#36A2EB", "#4BC0C0", "#9966FF", "#4CAF50"];

const ExpenseChart = () => {
  const { expenses } = useExpenses();

  const categories = ["Food", "Transport", "Activities", "Other"];

  const expenseData = categories.map((cat) => {
    const total = expenses
      .filter((exp) => exp.category === cat)
      .reduce((sum, exp) => sum + exp.amount, 0);
    return { name: cat, value: total };
  });

  const incomeData = categories.map((cat) => {
    const total = expenses
      .filter((exp) => exp.category === cat)
      .reduce((sum, exp) => sum + exp.amount, 0);
    return { name: cat, value: total };
  });

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-4 mt-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
        Income vs Expenses by Category
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
            {expenseData.map((entry, index) => (
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
            {incomeData.map((entry, index) => (
              <Cell
                key={`inc-${index}`}
                fill={COLORS_INCOME[index % COLORS_INCOME.length]}
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpenseChart;
