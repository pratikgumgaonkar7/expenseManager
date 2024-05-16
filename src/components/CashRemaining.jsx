import React from "react";

export default function CashRemaining({expenses}) {
    const availableCash = 30000;
    const totalAmount = expenses.reduce((sum, expense)=> sum + expense.amount, 0)
    const cashRemaining = availableCash - totalAmount
  return (
    <div className="cash-limit">
      <p>Cash Available</p>
      <h3>{cashRemaining}</h3>
    </div>
  );
}
