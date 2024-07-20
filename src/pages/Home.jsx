import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ setUserName }) => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const savedUserName = localStorage.getItem("userName");
    if (savedUserName) {
      setUserName(savedUserName);
      navigate("/expenses");
    }
  }, [navigate, setUserName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      setUserName(name);
      localStorage.setItem("userName", name); // Simpan nama pengguna di localStorage
      navigate("/expenses");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-400 to-blue-500 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">
          Welcome!
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-lg font-medium mb-2"
              htmlFor="name"
            >
              Enter your name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="John Doe"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-200 ease-in-out"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
