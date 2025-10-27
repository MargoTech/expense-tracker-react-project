import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { useExpenses } from "../context/ExpenseContext";
import { span } from "framer-motion/client";

const StatCard = ({ title, amount, color, emoji }) => (
  <motion.div>
    <span>{emoji}</span>
    <h3>{title}</h3>
    <p>{amount.toFixed(2)} €</p>
  </motion.div>
);
const DailyStats = () => {
  const { expenses } = useExpenses();
  const today = new Date().toISOString().split("T")[0];

  const todayRecords = expenses.filter(
    (exp) => exp.createdAt.split("T")[0] === today
  );
  const { income, expense } = useMemo(() => {
    return todayRecords.reduce(
      (acc, curr) => {
        if (curr.type === "income") acc.income += curr.amount;
        else acc.expense += curr.amount;
        return acc;
      },
      { income: 0, expense: 0 }
    );
  }, [todayRecords]);
};
