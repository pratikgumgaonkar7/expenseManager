import React from "react";

export default function Expense({ expense }) {
  return (
    <>
      <hr></hr>
      <li className="expense-list-item">
        <p>{expense.date}</p>
        <h4>{expense.expense}</h4>
        <p>{expense.amount} Rs.</p>
      </li>
    </>
  );
}
