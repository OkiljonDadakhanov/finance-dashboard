import React from "react";
import Header from "./components/Navbar";
import BalanceSummary from "./components/Dashboard/BalanceSummary";
import CurrencyConverter from "./components/CurrencyConverter";
import AddTransaction from "./components/Transactions/AddTransaction";
import { FinanceProvider } from "./context/FinanceContext";

function App() {
  return (
    <FinanceProvider>
      <Header />
      <div className="container mt-4">
        <BalanceSummary />
        <AddTransaction />
        <CurrencyConverter />
      </div>
    </FinanceProvider>
  );
}

export default App;
