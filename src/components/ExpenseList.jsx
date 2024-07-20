import React from "react";

const ExpenseList = ({ expenses, onDeleteExpense, formatRupiah }) => {
  return (
    <ul className="list-none flex flex-col gap-y-3">
      {expenses.map((expense, index) => (
        <li
          key={index}
          className="flex justify-between items-center bg-white p-4 rounded-lg border border-gray-200"
        >
          <div className="flex-1">
            <p className="text-xs text-gray-500 mb-1">
              {formatDate(expense.date)}
            </p>
            <p className="text-gray-700 font-medium">
              {expense.name}{" "}
              <span className="text-base font-medium text-gray-700 mr-4">
                - {formatRupiah(expense.amount)}
              </span>
            </p>
          </div>
          <button
            onClick={() => onDeleteExpense(index)}
            className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium py-1.5 px-3 rounded-lg transition duration-200 ease-in-out"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return `${day} ${month} ${year}, ${hours}:${minutes}`;
};

export default ExpenseList;
