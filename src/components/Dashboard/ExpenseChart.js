import React, { useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { FinanceContext } from "../../context/FinanceContext";
import BalanceSummary from "./BalanceSummary";

const ExpenseChart = () => {
  const { transactions } = useContext(FinanceContext);

  const data = transactions || [
    { category: "Food", amount: 120, type: "expense", description: "Lunch" },
    {
      category: "Rent",
      amount: 800,
      type: "expense",
      description: "Monthly rent",
    },
    {
      category: "Salary",
      amount: 2000,
      type: "income",
      description: "Monthly salary",
    },
    {
      category: "Freelance",
      amount: 500,
      type: "income",
      description: "Side gig",
    },
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const { category, amount, type, description } = payload[0].payload;
      return (
        <div className="bg-white shadow-lg p-2 rounded-md">
          <p className="font-semibold">{category}</p>
          <p>Amount: {amount}</p>
          <p
            className={`font-semibold ${
              type === "income" ? "text-green-500" : "text-red-500"
            }`}
          >
            Type: {type.charAt(0).toUpperCase() + type.slice(1)}
          </p>
          <p>Description: {description}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4 text-muted text-center">
        Expense Chart
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar
            dataKey="amount"
            barSize={40}
            stackId="a"
            legendType="circle"
            name="Transaction"
            shape={(props) => {
              const { x, y, width, height, payload } = props;
              const barColor =
                payload.type === "income" ? "#82ca9d" : "#f56969";
              return (
                <rect
                  x={x}
                  y={y}
                  width={width}
                  height={height}
                  fill={barColor}
                  rx={2}
                />
              );
            }}
          />
        </BarChart>
      </ResponsiveContainer>
      <BalanceSummary />
    </div>
  );
};

export default ExpenseChart;
