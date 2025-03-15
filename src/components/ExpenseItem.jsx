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
    <li
      className={`expense-item flex justify-between items-center p-2 rounded-md shadow-md ${categoryClass}`}
    >
      <span>
        {expense.title} - {expense.amount.toLocalString()}₽ ({expense.category})
      </span>
      <button
        className="text-blue-500 hover:text-blue-700 mx-2"
        onClick={onEdit}
      >
        ✏️
      </button>
      <button className="text-red-500 hover:text-red-700" onClick={onDelete}>
        ❌
      </button>
    </li>
  );
};

export default ExpenseItem;
