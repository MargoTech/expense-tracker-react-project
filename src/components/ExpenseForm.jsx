import { useState } from "react";

const ExpenseForm = ({ onAddExpence }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount) return;

    onAddExpense({ title, amount: parseFloat(amount) });
    setTitle("");
    setAmount("");
    setCategory("Food");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name of expense"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>Еда</option>
        <option>Транспорт</option>
        <option>Развлечения</option>
        <option>Другое</option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
};

export default ExpenseForm;
