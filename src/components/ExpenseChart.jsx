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
import { div } from "framer-motion/client";

const COLORS = ["#FF6384", "#36A2EB", "#4CAF50", "#9E9E9E"];

const ExpenseChart = () => {
  const { expenses } = useExpenses();

  const data = ["Food", "Transport", "Activities", "Other"].map(
    (cat, index) => {
      const total = expenses
        .filter((exp) => exp.category === cat)
        .reduce((sum, exp) => sum + exp.amount, 0);

      return { name: cat, value: "total" };
    }
  );

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-4 mt-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
        Expenses by Category
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
