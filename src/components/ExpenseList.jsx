import React from "react";
import Expense from "./Expense";

export default function ExpenseList({ expenses, isNUll }) {
  return (
    <>
      <ul>
        {expenses.map((expense) => (
          <Expense expense={expense} key={expense.id} />
        ))}
      </ul>
      {isNUll && <hr></hr>}
    </>
  );
}
