import { motion, AnimatePresence } from "framer-motion";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses, onDeleteExpense, onEditExpense }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-2">List expenses</h2>
      <ul>
        <AnimatePresence>
          {expenses.length > 0 ? (
            expenses.map((expense, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
              >
                <ExpenseItem
                  key={expense.id}
                  expense={expense}
                  onEditExpense={() => onEditExpense(expense.id)}
                  onDeleteExpense={() => onDeleteExpense(expense.id)}
                />
              </motion.li>
            ))
          ) : (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-gray-500 text-center"
            >
              Not expenses yet
            </motion.p>
          )}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default ExpenseList;
