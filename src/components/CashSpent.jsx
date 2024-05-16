import React from 'react'

export default function CashSpent({expenses}) {
    const totalAmount = expenses.reduce((sum, expense)=> sum + expense.amount, 0)
  return (
    <div className='cash-limit'>
        <p>Cash Spent</p>
        <h3>{totalAmount}</h3>
    </div>
  )
}
