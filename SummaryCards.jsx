import { useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";

export default function SummaryCards() {
  const { transactions } = useContext(FinanceContext);

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((a, b) => a + Number(b.amount), 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((a, b) => a + Number(b.amount), 0);

  const balance = income - expense;

  return (
    <div className="cards">
      <div className="card">Balance: ₹{balance}</div>
      <div className="card">Income: ₹{income}</div>
      <div className="card">Expense: ₹{expense}</div>
    </div>
  );
}
