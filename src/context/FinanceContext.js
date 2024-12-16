import React, { createContext, useState } from "react";

export const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions((prevTransactions) => [...prevTransactions, transaction]);
  };

  return (
    <FinanceContext.Provider value={{ transactions, addTransaction }}>
      {children}
    </FinanceContext.Provider>
  );
};
