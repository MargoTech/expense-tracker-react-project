import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { useExpenses } from "../context/ExpenseContext";
import { div, span } from "framer-motion/client";

const StatCard = ({ title, amount, color, emoji }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className={`flex flex-col items-center justify-center p-6 rounded-xl shadow-md w-full sm:w-1/2 text-white ${color}`}
  >
    <span className="text-3xl mb-2">{emoji}</span>
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-2xl font-bold mt-2">{amount.toFixed(2)} €</p>
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

  return (
    <div>
      <StatCard
        title="Earned Today"
        amount={income}
        color="bg-green-500"
        emoji="💰"
      />
      <StatCard
        title="Spent Today"
        amount={expense}
        color="bg-red-500"
        emoji="💸"
      />
    </div>
  );
};

export default DailyStats;
