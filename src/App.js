import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Navbar";
import CurrencyConverter from "./components/CurrencyConverter";
import { FinanceProvider } from "./context/FinanceContext";
import Footer from "./components/Footer";
import ExpenseChart from "./components/Dashboard/ExpenseChart";
import TransactionList from "./components/Transactions/TransactionList";
import MainDashboard from "./components/MainDashboard";

function App() {
  return (
    <Router>
      <FinanceProvider>
        <Header />
        <div className="container mt-4">
          <MainDashboard />
          <Routes>
            <Route path="/" element={<ExpenseChart />} />
            <Route path="/transactions" element={<TransactionList />} />
            <Route path="/currency-converter" element={<CurrencyConverter />} />
          </Routes>
        </div>
      </FinanceProvider>
      <Footer />
    </Router>
  );
}

export default App;
