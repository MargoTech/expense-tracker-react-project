import { createContext, useReducer, useContext, useEffect } from "react";

const ExpenseContext = createContext();

const initialState = JSON.parse(localStorage.getItem("expenses")) || [];

const expenseReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    case "EDIT":
      return state.map((expense) =>
        expense.id === action.payload.id ? action.payload : expense
      );
    default:
      return state;
  }
};

export const ExpenseProvider = ({ children }) => {
  const [expenses, dispatch] = useReducer(expenseReducer, initialState);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => dispatch({ type: "ADD", payload: expense });
  const deleteExpense = (id) => dispatch({ type: "DELETE", payload: id });
  const editExpense = (updatedExpense) =>
    dispatch({ type: "EDIT", payload: updatedExpense });

  return (
    <ExpenseContext.Provider
      value={{ expenses, addExpense, deleteExpense, editExpense }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpenses = () => useContext(ExpenseContext);
