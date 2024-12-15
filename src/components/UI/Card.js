import React from "react";

function Card({ title, children }) {
  return (
    <div className="card shadow-sm mb-4">
      <div className="card-header bg-primary text-white">{title}</div>
      <div className="card-body">{children}</div>
    </div>
  );
}

export default Card;
