import React, { useState, useContext } from "react";
import { FinanceContext } from "../../context/FinanceContext";

function AddTransaction() {
  const { addTransaction } = useContext(FinanceContext);
  const [formData, setFormData] = useState({
    description: "",
    amount: "",
    type: "income",
    date: "", 
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.description || !formData.amount || !formData.date) return;

    addTransaction({
      description: formData.description,
      amount: parseFloat(formData.amount),
      type: formData.type,
      date: formData.date, 
    });

    setFormData({
      description: "",
      amount: "",
      type: "income",
      date: "", 
    });
  };

  return (
    <div className="container my-4">
      <div className="card shadow-sm border-0">
        <div className="card-body">
          <h2 className="card-title text-center text-muted mb-4">
            Add Transaction
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <input
                type="text"
                id="description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                placeholder="Enter description"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="amount" className="form-label">
                Amount
              </label>
              <input
                type="number"
                id="amount"
                value={formData.amount}
                onChange={(e) =>
                  setFormData({ ...formData, amount: e.target.value })
                }
                placeholder="Enter amount"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="type" className="form-label">
                Type
              </label>
              <select
                id="type"
                value={formData.type}
                onChange={(e) =>
                  setFormData({ ...formData, type: e.target.value })
                }
                className="form-select"
              >
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="date" className="form-label">
                Date
              </label>
              <input
                type="date"
                id="date"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Add Transaction
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddTransaction;
