import React, { createContext, useState } from "react";

export const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [currencyRates, setCurrencyRates] = useState({});

  return (
    <FinanceContext.Provider
      value={{ transactions, setTransactions, currencyRates, setCurrencyRates }}
    >
      {children}
    </FinanceContext.Provider>
  );
};
