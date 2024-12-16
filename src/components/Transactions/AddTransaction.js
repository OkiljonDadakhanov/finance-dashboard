import React, { useState, useContext } from "react";
import { FinanceContext } from "../../context/FinanceContext";

function AddTransaction() {
  const { addTransaction } = useContext(FinanceContext);
  const [formData, setFormData] = useState({
    description: "",
    amount: "",
    type: "income",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.description || !formData.amount) return;

    addTransaction({
      description: formData.description,
      amount: parseFloat(formData.amount),
      type: formData.type,
    });

    // Clear form fields
    setFormData({
      description: "",
      amount: "",
      type: "income",
    });
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg mt-4">
      <h2 className="text-xl font-semibold mb-4">Add Transaction</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="block text-gray-700">Description</label>
          <input
            type="text"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            placeholder="Enter description"
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-3">
          <label className="block text-gray-700">Amount</label>
          <input
            type="number"
            value={formData.amount}
            onChange={(e) =>
              setFormData({ ...formData, amount: e.target.value })
            }
            placeholder="Enter amount"
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-3">
          <label className="block text-gray-700">Type</label>
          <select
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
            className="w-full p-2 border rounded"
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        <button type="submit" className="btn btn-outline-primary">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransaction;
