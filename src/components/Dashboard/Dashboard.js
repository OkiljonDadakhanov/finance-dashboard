import React, { useContext } from "react";
import { FinanceContext } from "../../context/FinanceContext";
import AddTransaction from "../Transactions/AddTransaction";
import TransactionList from "../Transactions/TransactionList";
import ExpenseChart from "../Dashboard/ExpenseChart";

const Dashboard = () => {
  const { transactions } = useContext(FinanceContext);

  const expenses = transactions
    .filter((transaction) => transaction.type === "expense") 
    .reduce((acc, transaction) => {
      const existingCategory = acc.find(
        (item) => item.category === transaction.description
      );

      if (existingCategory) {
        existingCategory.amount += transaction.amount;
      } else {
        acc.push({
          category: transaction.description,
          amount: transaction.amount,
        });
      }
      return acc;
    }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Expense Tracker</h1>

      <AddTransaction />

      <TransactionList />

      <ExpenseChart expenses={expenses} />
    </div>
  );
};

export default Dashboard;
