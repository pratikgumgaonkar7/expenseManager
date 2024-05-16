import React, { useState } from "react";

export default function ExpenseForm({ onAddingExpense }) {
  const [date, setDate] = useState("");
  const [expense, setExpense] = useState("");
  const [amount, setAmount] = useState("");

  function handlleSubmit(e) {
    e.preventDefault();
    const id = crypto.randomUUID;
    if (!date || !expense || !amount) return;
    const newExpense = {
      id,
      date,
      expense,
      amount: parseInt(amount)
    };
    onAddingExpense(newExpense);
    setDate("");
    setExpense("");
    setAmount("");
  }

  return (
    <form onSubmit={handlleSubmit}>
      <div className="expense-add-form">
        <h2>Add Your Expense details here</h2>
        <div className="expense-details">
          <div className="expense-input">
            <label>DATE</label>
            <input
              type="date"
              placeholder="dd-mm-yyyy"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="expense-input">
            <label>EXPENSE</label>
            <input
              type="text"
              placeholder="like bike repair"
              value={expense}
              onChange={(e) => setExpense(e.target.value)}
            />
          </div>
          <div className="expense-input">
            <label>AMOUNT</label>
            <input
              type="text"
              placeholder="100"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </div>
        </div>
        <button>Add Expense</button>
      </div>
    </form>
  );
}
