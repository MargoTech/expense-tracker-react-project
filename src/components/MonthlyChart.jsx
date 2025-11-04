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
import { div } from "framer-motion/client";

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
    <div>
      <h2>Income & Expenses — This Month</h2>

      <ResponsiveContainer>
        <LineChart data={dailyData} width={400} height={250}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#4ade80"
            name="Income"
          />
          <Line
            type="monotone"
            dataKey="expense"
            stroke="#f87171"
            name="Expense"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyChart;
