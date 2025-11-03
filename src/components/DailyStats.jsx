import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { useExpenses } from "../context/ExpenseContext";

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
  const { income, expense, net } = useMemo(() => {
    const result = todayRecords.reduce(
      (acc, curr) => {
        if (curr.type === "income") acc.income += curr.amount;
        else acc.expense += curr.amount;
        return acc;
      },
      { income: 0, expense: 0 }
    );
    result.net = result.income - result.expense;
    return result;
  }, [todayRecords]);

  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full max-w-4xl">
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
      <StatCard
        title="Net Today"
        amount={net}
        color={net >= 0 ? "bg-blue-500" : "bg-yellow-500"}
        emoji={net >= 0 ? "📈" : "📉"}
      />
    </div>
  );
};

export default DailyStats;
