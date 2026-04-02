import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(
    JSON.parse(localStorage.getItem("transactions")) || []
  );
  const [role, setRole] = useState("viewer");

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (data) => {
    setTransactions([...transactions, { id: uuidv4(), ...data }]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  return (
    <FinanceContext.Provider
      value={{ transactions, addTransaction, deleteTransaction, role, setRole }}
    >
      {children}
    </FinanceContext.Provider>
  );
};
