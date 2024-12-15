import React, { useEffect, useState, useContext } from "react";
import { FinanceContext } from "../../context/FinanceContext";
import { fetchExchangeRates } from "../../utils/api";

function CurrencyConverter() {
  const { setCurrencyRates } = useContext(FinanceContext);
  const [amount, setAmount] = useState(1);
  const [converted, setConverted] = useState(0);
  const [toCurrency, setToCurrency] = useState("UZS");

  useEffect(() => {
    fetchExchangeRates().then((rates) => setCurrencyRates(rates));
  }, [setCurrencyRates]);

  const handleConvert = (rates) => {
    setConverted(amount * (rates[toCurrency] || 1));
  };

  return (
    <div>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
      >
        <option value="UZS">UZS</option>
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
      </select>
      <button onClick={() => handleConvert()}>Convert</button>
      <p>Converted Amount: {converted}</p>
    </div>
  );
}

export default CurrencyConverter;
