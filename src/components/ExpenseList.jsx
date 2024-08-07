import React from "react";

const ExpenseList = ({
  expenses,
  onDeleteExpense,
  onEditExpense,
  formatRupiah,
}) => {
  return (
    <ul className="list-none flex flex-col gap-y-3">
      {expenses.map((expense, index) => (
        <li
          key={index}
          className="flex justify-between items-center bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 p-4 rounded-lg border border-gray-200"
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
          <div className="flex gap-x-2">
            <button
              onClick={() => onEditExpense(expense)}
              className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:from-green-500 hover:via-green-600 hover:to-green-700 text-white text-sm font-medium py-1.5 px-3 rounded-lg transition duration-200 ease-in-out"
            >
              Edit
            </button>
            <button
              onClick={() => onDeleteExpense(index)}
              className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:from-red-500 hover:via-red-600 hover:to-red-700 text-white text-sm font-medium py-1.5 px-3 rounded-lg transition duration-200 ease-in-out"
            >
              Delete
            </button>
          </div>
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
