import React, { useContext, useState, useEffect } from "react";
import { FinanceContext } from "../../context/FinanceContext";

function BalanceSummary() {
  const { transactions } = useContext(FinanceContext);

  const [currency, setCurrency] = useState("USD");
  const [exchangeRates, setExchangeRates] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await fetch(
          `https://v6.exchangerate-api.com/v6/${process.env.REACT_APP_EXCHANGE_RATE_API_KEY}/latest/USD`
        );
        const data = await response.json();
        setExchangeRates(data.conversion_rates);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
        setIsLoading(false);
      }
    };

    fetchExchangeRates();
  }, []);

  const convertCurrency = (amount) => {
    return exchangeRates[currency]
      ? (amount * exchangeRates[currency]).toFixed(2)
      : amount.toFixed(2);
  };

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);
  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);
  const balance = income - expenses;

  if (isLoading) {
    return <p>Loading exchange rates...</p>;
  }

  return (
    <div className="text-center">
      <h4>Balance Summary</h4>

      <div className="mb-4">
        <label className="block font-semibold mb-2">Select Currency:</label>
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="UZS">UZS</option>
          <option value="AED">UAE Dirham</option>
          <option value="INR">Indian Rupee</option>
          <option value="RUB">Russian Ruble</option>
        </select>
      </div>

      <p>
        Income: {convertCurrency(income)} {currency}
      </p>
      <p>
        Expenses: {convertCurrency(expenses)} {currency}
      </p>
      <p>
        Balance: {convertCurrency(balance)} {currency}
      </p>
    </div>
  );
}

export default BalanceSummary;
