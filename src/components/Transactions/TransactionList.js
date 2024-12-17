import React, { useContext, useState } from "react";
import { FinanceContext } from "../../context/FinanceContext";
import AddTransaction from "./AddTransaction";
import { CiCalendarDate } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";

const TransactionList = () => {
  const { transactions, deleteTransaction, editTransaction } =
    useContext(FinanceContext);
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({
    description: "",
    amount: "",
    type: "",
    date: "",
  });

  const handleEditClick = (index) => {
    setEditIndex(index);
    setEditData(transactions[index]);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (!editData.description || !editData.amount || !editData.date) return;

    editTransaction(editIndex, {
      description: editData.description,
      amount: parseFloat(editData.amount),
      type: editData.type,
      date: editData.date,
    });

    setEditIndex(null);
    setEditData({ description: "", amount: "", type: "income", date: "" });
  };

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg mt-4 container">
      <AddTransaction />

      <h2 className="text-xl font-semibold mb-4 text-center text-muted">
        Transaction List
      </h2>
      <div className="row d-flex justify-content-center">
        <div className="col-sm">
          <h5 className="text-success text-center">Income</h5>
          {transactions.filter((t) => t.type === "income").length === 0 ? (
            <p className="text-muted">No income transactions yet.</p>
          ) : (
            <ul className="list-group list-group-flush">
              {transactions.map((transaction, index) => {
                if (transaction.type !== "income") return null;

                return editIndex === index ? (
                  <li key={index} className="py-2 list-group-item">
                    <form
                      onSubmit={handleEditSubmit}
                      className="d-flex flex-column"
                    >
                      <input
                        type="text"
                        value={editData.description}
                        onChange={(e) =>
                          setEditData({
                            ...editData,
                            description: e.target.value,
                          })
                        }
                        placeholder="Description"
                        className="form-control mb-2"
                      />
                      <input
                        type="number"
                        value={editData.amount}
                        onChange={(e) =>
                          setEditData({ ...editData, amount: e.target.value })
                        }
                        placeholder="Amount"
                        className="form-control mb-2"
                      />
                      <input
                        type="date"
                        value={editData.date}
                        onChange={(e) =>
                          setEditData({ ...editData, date: e.target.value })
                        }
                        className="form-control mb-2"
                      />
                      <button type="submit" className="btn btn-success btn-sm">
                        Save
                      </button>
                    </form>
                  </li>
                ) : (
                  <li
                    key={index}
                    className="py-2 list-group-item d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <p className="text-info font-medium h3 ms-2">
                        {transaction.description}
                      </p>
                      <p className="text-sm font-bold text-success ms-2">
                        -${Math.abs(transaction.amount)}
                      </p>
                      <p className="text-secondary text-sm badge ">
                        <CiCalendarDate size={20} className="mt-n3" />
                        {new Date(transaction.date).toLocaleDateString()}
                      </p>
                    </div>
                    <div>
                      <button
                        onClick={() => handleEditClick(index)}
                        className="btn btn-warning btn-sm me-2"
                      >
                        <CiEdit size={20} />
                      </button>
                      <button
                        onClick={() => deleteTransaction(index)}
                        className="btn btn-danger btn-sm"
                      >
                        <MdDeleteForever size={20} />
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div className="col-sm">
          <h5 className="text-danger text-center">Expense</h5>
          {transactions.filter((t) => t.type === "expense").length === 0 ? (
            <p className="text-muted">No expense transactions yet.</p>
          ) : (
            <ul className="list-group list-group-flush">
              {transactions.map((transaction, index) => {
                if (transaction.type !== "expense") return null;

                return editIndex === index ? (
                  <li key={index} className="py-2 list-group-item">
                    <form
                      onSubmit={handleEditSubmit}
                      className="d-flex flex-column"
                    >
                      <input
                        type="text"
                        value={editData.description}
                        onChange={(e) =>
                          setEditData({
                            ...editData,
                            description: e.target.value,
                          })
                        }
                        placeholder="Description"
                        className="form-control mb-2"
                      />
                      <input
                        type="number"
                        value={editData.amount}
                        onChange={(e) =>
                          setEditData({ ...editData, amount: e.target.value })
                        }
                        placeholder="Amount"
                        className="form-control mb-2"
                      />
                      <input
                        type="date"
                        value={editData.date}
                        onChange={(e) =>
                          setEditData({ ...editData, date: e.target.value })
                        }
                        className="form-control mb-2"
                      />
                      <button type="submit" className="btn btn-success btn-sm">
                        Save
                      </button>
                    </form>
                  </li>
                ) : (
                  <li
                    key={index}
                    className="py-2 list-group-item d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <p className="text-info font-medium h3  ms-2">
                        {transaction.description}
                      </p>
                      <p className="text-sm font-bold text-danger  ms-2">
                        -${Math.abs(transaction.amount)}
                      </p>
                      <p className="text-secondary text-sm badge me-2">
                        <CiCalendarDate size={20} />
                        {new Date(transaction.date).toLocaleDateString()}
                      </p>
                    </div>
                    <div>
                      <button
                        onClick={() => handleEditClick(index)}
                        className="btn btn-warning btn-sm me-2"
                      >
                        <CiEdit size={20} />
                      </button>
                      <button
                        onClick={() => deleteTransaction(index)}
                        className="btn btn-danger btn-sm"
                      >
                        <MdDeleteForever size={20} />
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default TransactionList;
