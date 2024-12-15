import React, { useContext } from "react";
import { FinanceContext } from "../../context/FinanceContext";

function BalanceSummary() {
  const { transactions } = useContext(FinanceContext);

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);
  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);
  const balance = income - expenses;

  return (
    <div className="text-center">
      <h4>Balance Summary</h4>
      <p>Income: ${income}</p>
      <p>Expenses: ${expenses}</p>
      <p>Balance: ${balance}</p>
    </div>
  );
}

export default BalanceSummary;
