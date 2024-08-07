import React, { useState } from "react";

const ExpenseForm = ({ onAddExpense, onUpdateExpense, currentExpense }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (currentExpense) {
      setName(currentExpense.name);
      setAmount(currentExpense.amount);
      setDate(currentExpense.date);
    } else {
      setName("");
      setAmount("");
      setDate("");
    }
  }, [currentExpense]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && amount && date) {
      const expense = { name, amount: parseFloat(amount), date };
      if (currentExpense) {
        onUpdateExpense(expense);
      } else {
        onAddExpense(expense);
      }
      setName("");
      setAmount("");
      setDate("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-3">
      <h2 className="text-2xl font-semibold mb-4">Add New Expense</h2>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-lg font-medium mb-2"
          htmlFor="name"
        >
          Expense Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Food, Drink, etc."
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-lg font-medium mb-2"
          htmlFor="amount"
        >
          Amount
        </label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="10000"
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-lg font-medium mb-2"
          htmlFor="date"
        >
          Date
        </label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded-lg transition duration-200 ease-in-out hover:from-blue-600 hover:via-purple-600 hover:to-pink-600"
        >
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
