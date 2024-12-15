import React, { useState, useContext } from "react";
import { FinanceContext } from "../../context/FinanceContext";

function AddTransaction() {
  const { setTransactions } = useContext(FinanceContext);
  const [formData, setFormData] = useState({
    description: "",
    amount: 0,
    type: "income",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setTransactions((prev) => [...prev, formData]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Description"
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
      />
      <input
        type="number"
        onChange={(e) => setFormData({ ...formData, amount: +e.target.value })}
      />
      <select
        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTransaction;
