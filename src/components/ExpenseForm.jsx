import React, { useState } from "react";

const ExpenseForm = ({ onAddExpense }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && amount && date) {
      onAddExpense({ name, amount: parseFloat(amount), date });
      setName("");
      setAmount("");
      setDate("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-red-500 p-6 rounded-lg shadow-md"
    >
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
          placeholder="Rent, Food, etc."
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
          placeholder="100000"
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
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-200 ease-in-out"
      >
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
