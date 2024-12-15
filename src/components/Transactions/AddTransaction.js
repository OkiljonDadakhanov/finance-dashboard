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
    <div className="container mt-4">
      <h2 className="text-center mb-4">Add Transaction</h2>
      <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            id="description"
            type="text"
            placeholder="Enter description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            id="amount"
            type="number"
            placeholder="Enter amount"
            value={formData.amount}
            onChange={(e) =>
              setFormData({ ...formData, amount: +e.target.value })
            }
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="type" className="form-label">
            Transaction Type
          </label>
          <select
            id="type"
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
            className="form-select"
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary">
            Add Transaction
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTransaction;
