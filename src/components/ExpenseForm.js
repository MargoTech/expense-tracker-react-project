import { useState } from "react";

const ExpenseForm = ({ onAddExpence } => {
    const [title, setTitle] = useState(""),
    const [amount, setAmount] = useState("")
};

const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount) return;

    onAddExpence({ title, amount: parseFloat(amount) });
    setTitle("");
    setAmount("");
};


return (
    <form></form>
)
)