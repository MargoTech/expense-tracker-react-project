import { motion } from "framer-motion";
import { Edit3, Trash2 } from "lucide-react";

const ExpenseItem = ({ expense, onDelete, onEdit }) => {
  const categoryColors = {
    Food: "bg-red-200 text-red-800",
    Transport: "bg-blue-200 text-blue-800",
    Activities: "bg-green-200 text-green-800",
    Other: "bg-gray-200 text-gray-800",
  };

  const categoryClass =
    categoryColors[expense.category] || categoryColors["Other"];

  return (
    <motion.li
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -50 }}
      layout
      className={`flex justify-between items-center p-2 rounded-md shadow-md ${categoryClass}`}
    >
      <span className="font-medium">
        {expense.title} - {expense.amount.toLocalString()}₽ ({expense.category})
      </span>
      <div>
        <button
          className="text-blue-500 hover:text-blue-700 mx-2"
          onClick={onEdit}
        >
          ✏️
        </button>
        <button className="text-red-500 hover:text-red-700" onClick={onDelete}>
          ❌
        </button>
      </div>
    </motion.li>
  );
};

export default ExpenseItem;
