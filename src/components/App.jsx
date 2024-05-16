import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseForm from "./ExpenseForm";
import CashSpent from "./CashSpent";
import CashRemaining from "./CashRemaining";

export default function App() {
  const [expenses, setExpenses] = useState([]);
  const [isNull, setIsNull] = useState(false)
  
  function handleExpenseList(expense) {
    setExpenses((expenses) => [...expenses, expense]);
    setIsNull(!isNull)
  }
   

  return (
    <>
      <div className="bar">
        <CashRemaining expenses={expenses} />
        <CashSpent expenses={expenses} />
      </div>
      <div className="app">
        <div className="expense-sidebar">
          {expenses && <ExpenseList expenses={expenses} isNUll={isNull}/>}
        </div>
        <ExpenseForm onAddingExpense={handleExpenseList} />
      </div>
    </>
  );
}
