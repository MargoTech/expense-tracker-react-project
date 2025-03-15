import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses, onDeleteExpense, onEditExpense }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-2">List expenses</h2>
      <ul>
        {expenses.length > 0 ? (
          expenses.map((expense, index) => (
            <ExpenseItem
              key={index}
              expense={expense}
              onEditExpense={() => onEditExpense(index)}
              onDeleteExpense={() => onDeleteExpense(index)}
            />
          ))
        ) : (
          <p className="text-gray-500 text-center">Not expenses yet</p>
        )}
      </ul>
    </div>
  );
};

export default ExpenseList;
