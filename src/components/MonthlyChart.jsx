import React, { useMemo } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useExpenses } from "../context/ExpenseContext";

const MonthlyChart = () => {
  const { expenses } = useExpenses();

  const currentMonth = new Date().toISOString().slice(0, 7);

  const dailyData = useMemo(() => {
    const grouped = {};

    expenses.forEach((exp) => {
      if (!exp.createdAt.startsWith(currentMonth)) return;

      const day = exp.createdAt.slice(0, 10);
      if (!grouped[day]) grouped[day] = { date: day, income: 0, expense: 0 };

      if (exp.type === "income") grouped[day].income += exp.amount;
      else grouped[day].expense += exp.amount;
    });
    return Object.values(grouped).sort((a, b) => (a.date > b.date ? 1 : -1));
  }, [expenses, currentMonth]);

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-4 mt-6">
      <h2 className="text-xl font-semibold text-center text-gray-800 dark:text-white mb-4">
        Income & Expenses — {currentMonth}
      </h2>

      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={dailyData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" tickFormatter={(date) => date.slice(-2)} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#10B981"
            strokeWidth={3}
            dot={{ r: 4 }}
            name="Income (€)"
          />
          <Line
            type="monotone"
            dataKey="expense"
            stroke="#EF4444"
            strokeWidth={3}
            dot={{ r: 4 }}
            name="Expense (€)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyChart;
