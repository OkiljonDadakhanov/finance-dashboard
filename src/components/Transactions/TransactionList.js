import React, { useContext } from "react";
import { FinanceContext } from "../../context/FinanceContext";

const TransactionList = () => {
  const { transactions } = useContext(FinanceContext);

  return (
    <div className="p-4 bg-white shadow-md rounded-lg mt-4">
      <h2 className="text-xl font-semibold mb-4">Transaction List</h2>
      {transactions.length === 0 ? (
        <p className="text-gray-500">No transactions yet.</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {transactions.map((transaction, index) => (
            <li key={index} className="py-2 flex justify-between items-center">
              <div>
                <p className="text-gray-700 font-medium">
                  {transaction.description}
                </p>
                <span className="text-gray-500 text-sm">
                  {new Date().toLocaleDateString()}
                </span>
              </div>
              <span
                className={`text-sm font-bold ${
                  transaction.type === "expense"
                    ? "text-red-500"
                    : "text-green-500"
                }`}
              >
                {transaction.type === "expense" ? "-" : "+"}$
                {Math.abs(transaction.amount)}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TransactionList;
