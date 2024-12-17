import React, { createContext, useState } from "react";

export const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (index) => {
    setTransactions((prevTransactions) =>
      prevTransactions.filter((_, i) => i !== index)
    );
  };

  const editTransaction = (index, updatedTransaction) => {
    setTransactions((prevTransactions) =>
      prevTransactions.map((transaction, i) =>
        i === index ? updatedTransaction : transaction
      )
    );
  };

  return (
    <FinanceContext.Provider
      value={{
        transactions,
        addTransaction,
        deleteTransaction,
        editTransaction,
      }}
    >
      {children}
    </FinanceContext.Provider>
  );
};
