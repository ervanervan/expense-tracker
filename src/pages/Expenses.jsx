import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import Modal from "../components/Modal";

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName"); // Ambil username dari localStorage

  // Ambil data pengeluaran dari localStorage saat komponen dimuat
  useEffect(() => {
    if (!userName) {
      navigate("/");
      return;
    }

    const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
    console.log("Loaded expenses:", savedExpenses); // Debugging
    setExpenses(savedExpenses);
  }, [navigate, userName]);

  // Simpan data pengeluaran ke localStorage setiap kali ada perubahan
  useEffect(() => {
    console.log("Saving expenses:", expenses); // Debugging
    // localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    const newExpense = {
      ...expense,
      date: new Date().toISOString(), // Menyimpan waktu dalam format ISO
    };
    setExpenses([...expenses, newExpense]);
    setShowForm(false);
    localStorage.setItem("expenses", JSON.stringify([...expenses, newExpense]));
  };

  const deleteExpense = (index) => {
    setExpenses(expenses.filter((_, i) => i !== index));
    localStorage.setItem(
      "expenses",
      JSON.stringify(expenses.filter((_, i) => i !== index))
    );
  };

  const formatRupiah = (amount) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(amount);
  };

  const groupByMonth = (expenses) => {
    return expenses.reduce((acc, expense) => {
      const month = new Date(expense.date).toLocaleString("default", {
        month: "long",
        year: "numeric",
      });
      if (!acc[month]) {
        acc[month] = [];
      }
      acc[month].push(expense);
      return acc;
    }, {});
  };

  const groupedExpenses = groupByMonth(expenses);
  const totalExpenses = expenses.reduce(
    (acc, expense) => acc + expense.amount,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 md:pt-10">
      <div className="bg-white p-6 rounded-lg max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-800">
            Hello, {userName}!
          </h1>
        </div>

        <div className="mb-8 p-6 bg-blue-500 text-white rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Total Expenses</h2>
          <p className="text-xl md:text-2xl font-bold">
            {formatRupiah(totalExpenses)}
          </p>
        </div>

        <div className="mb-8">
          {Object.entries(groupedExpenses).map(([month, expenses]) => (
            <div key={month} className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {month}
              </h3>
              <ExpenseList
                expenses={expenses}
                onDeleteExpense={deleteExpense}
                formatRupiah={formatRupiah}
              />
            </div>
          ))}
        </div>

        <button
          onClick={() => setShowForm(!showForm)}
          className="fixed bottom-8 right-8 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-full shadow-lg transition duration-200 ease-in-out"
        >
          + Add Expense
        </button>

        {/* {showForm && <ExpenseForm onAddExpense={addExpense} />} */}
        <Modal isOpen={showForm} onClose={() => setShowForm(false)}>
          <ExpenseForm onAddExpense={addExpense} />
        </Modal>
      </div>
    </div>
  );
};

export default Expenses;
