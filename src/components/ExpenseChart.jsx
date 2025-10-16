import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { useExpenses } from "../context/ExpenseContext";

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

  return;
};
