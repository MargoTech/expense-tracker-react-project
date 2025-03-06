const ExpenseList = ({ expenses }) => {
  return (
    <ul className="expense-list">
      {expenses.length === 0 ? (
        <p>Расходов пока нет</p>
      ) : (
        expenses.map((expense, index) => (
          <li key={index} className="expense-item">
            <span>{expense.title}</span>
            <span>{expense.amount} ₽</span>
          </li>
        ))
      )}
    </ul>
  );
};

export default ExpenseList;
