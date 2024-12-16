import React from "react";
import { NavLink } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { AiOutlineTransaction } from "react-icons/ai";
import { MdCurrencyExchange } from "react-icons/md";

export default function MainDashboard() {
  return (
    <div className="p-3 border rounded shadow-sm bg-light w-25">
      <ul className="nav nav-pills flex-column">
        <li className="nav-item mb-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "nav-link active bg-primary text-white"
                : "nav-link text-dark"
            }
          >
            <RxDashboard className="me-2" />
            Dashboard
          </NavLink>
        </li>
        <li className="nav-item mb-2 ">
          <NavLink
            to="/transactions"
            className={({ isActive }) =>
              isActive
                ? "nav-link active bg-primary text-white"
                : "nav-link text-dark"
            }
          >
            <AiOutlineTransaction className="me-2" />
            View Transactions
          </NavLink>
        </li>
        <li className="nav-item ">
          <NavLink
            to="/currency-converter"
            className={({ isActive }) =>
              isActive
                ? "nav-link active bg-primary text-white"
                : "nav-link text-dark"
            }
          >
            <MdCurrencyExchange className="me-2" />
            Currency Converter
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
