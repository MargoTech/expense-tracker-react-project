const ExpenseItem = ({ expense, onDelete, onEdit }) => {
  return (
    <li className="expense-item">
      <span>
        {expense.title} - {expense.amount}₽ ({expense.category})
      </span>
      <button onClick={onEdit}>✏️</button>
      <button onClick={onDelete}>❌</button>
    </li>
  );
};

export default ExpenseItem;
