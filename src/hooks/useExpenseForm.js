import { useState } from "react";

export const useExpenseForm = (initialCategory = "Food") => {
  const [form, setForm] = useState({
    title: "",
    amount: "",
    category: initialCategory,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () =>
    setForm({ title: "", amount: "", category: initialCategory });

  const isValid = () =>
    form.title.trim() !== "" && form.amount !== "" && !isNaN(form.amount);

  return { form, handleChange, resetForm, isValid };
};
