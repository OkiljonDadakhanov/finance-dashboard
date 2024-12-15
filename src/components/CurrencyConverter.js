import React, { useState, useEffect } from "react";

const CurrencyConverter = () => {
  const [exchangeRates, setExchangeRates] = useState({});
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [targetCurrency, setTargetCurrency] = useState("EUR");

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await fetch(
          `https://v6.exchangerate-api.com/v6/${process.env.REACT_APP_EXCHANGE_RATE_API_KEY}/latest/${baseCurrency}`
        );
        const data = await response.json();
        setExchangeRates(data.conversion_rates);
      } catch (error) {
        console.error("APIdan valyuta kursini olishda xato:", error);
      }
    };

    fetchExchangeRates();
  }, [baseCurrency]);

  const handleConvert = () => {
    if (exchangeRates[targetCurrency]) {
      setConvertedAmount(amount * exchangeRates[targetCurrency]);
    }
  };

  return (
    <div className="container mt-4">
      <h1>Valyuta Konvertori</h1>
      <div className="form-group">
        <label>Asosiy Valyuta:</label>
        <select
          value={baseCurrency}
          onChange={(e) => setBaseCurrency(e.target.value.toUpperCase())}
          className="form-control"
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="UZS">UZS</option>
        </select>
      </div>
      <div className="form-group">
        <label>Maqsad Valyutasi:</label>
        <select
          value={targetCurrency}
          onChange={(e) => setTargetCurrency(e.target.value.toUpperCase())}
          className="form-control"
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="UZS">UZS</option>
        </select>
      </div>
      <div className="form-group">
        <label>Ma’lum miqdor:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="form-control"
        />
      </div>

      <button onClick={handleConvert} className="btn btn-primary mt-3">
        Konvertatsiya qilish
      </button>
      {convertedAmount && (
        <h2 className="mt-4">
          Natija: {amount} {baseCurrency} = {convertedAmount.toFixed(2)}{" "}
          {targetCurrency}
        </h2>
      )}
    </div>
  );
};

export default CurrencyConverter;
