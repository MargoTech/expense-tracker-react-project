import { createContext, useReduce, useContext, useEffect } from "react";

const ExpenseContext = createContext();

const expenseReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state.action.payload];
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    case "EDIT":
      return state.map((expense) =>
        expense.id === action.payload.id ? action.payload : expense
      );
    case "LOAD":
      return action.payload;
    default:
      return state;
  }
};
