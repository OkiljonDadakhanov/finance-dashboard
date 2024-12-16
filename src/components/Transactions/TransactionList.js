import React, { useContext } from "react";
import { FinanceContext } from "../../context/FinanceContext";
import AddTransaction from "./AddTransaction";

const TransactionList = () => {
  const { transactions } = useContext(FinanceContext);

  const incomeTransactions = transactions.filter(
    (transaction) => transaction.type === "income"
  );
  const expenseTransactions = transactions.filter(
    (transaction) => transaction.type === "expense"
  );

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg mt-4 container">
      <AddTransaction />

      <h2 className="text-xl font-semibold mb-4 text-center text-muted">
        Transaction List
      </h2>
      <div className="row d-flex justify-content-center">
        <div className="col-sm">
          <h5 className="text-success">Income</h5>
          {incomeTransactions.length === 0 ? (
            <p className="text-muted">No income transactions yet.</p>
          ) : (
            <ul className="list-group list-group-flush">
              {incomeTransactions.map((transaction, index) => (
                <li key={index} className="py-2 list-group-item">
                  <div>
                    <p className="text-info font-medium h3">
                      {transaction.description}
                    </p>
                    <span className="text-sm font-bold text-success">
                      +${Math.abs(transaction.amount)}
                    </span>
                  </div>
                  <span className="text-secondary text-sm badge">
                    {new Date(transaction.date).toLocaleDateString()}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="col-sm">
          <h5 className="text-danger">Expense</h5>
          {expenseTransactions.length === 0 ? (
            <p className="text-muted">No expense transactions yet.</p>
          ) : (
            <ul className="list-group list-group-flush">
              {expenseTransactions.map((transaction, index) => (
                <li key={index} className="py-2 list-group-item">
                  <div>
                    <p className="text-info font-medium h3">
                      {transaction.description}
                    </p>
                    <span className="text-sm font-bold text-danger">
                      -${Math.abs(transaction.amount)}
                    </span>
                  </div>
                  <span className="text-secondary text-sm badge">
                    {new Date(transaction.date).toLocaleDateString()}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default TransactionList;
