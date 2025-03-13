const ExpenseItem = ({ expense, onDelete, onEdit }) => {
  const categoryColors = {
    Еда: "bg-red-200 text-red-800",
    Транспорт: "bg-blue-200 text-blue-800",
    Развлечения: "bg-green-200 text-green-800",
    Другое: "bg-gray-200 text-gray-800",
  };
  return (
    <li className="expense-item">
      <span>
        {expense.title} - {expense.amount}₽ ({expense.category})
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
