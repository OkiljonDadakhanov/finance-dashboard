import React from "react";
import Header from "./components/Navbar";
import BalanceSummary from "./components/Dashboard/BalanceSummary";
import CurrencyConverter from "./components/CurrencyConverter";
import AddTransaction from "./components/Transactions/AddTransaction";
import { FinanceProvider } from "./context/FinanceContext";
import Footer from "./components/Footer";
import ExpenseChart from "./components/Dashboard/ExpenseChart";
import TransactionList from "./components/Transactions/TransactionList";

function App() {
  return (
    <>
      <FinanceProvider>
        <Header />
        <div className="container mt-4">
          <ExpenseChart />
          <BalanceSummary />
          <TransactionList />
          <AddTransaction />
          <CurrencyConverter />
        </div>
      </FinanceProvider>
      <Footer />
    </>
  );
}

export default App;
