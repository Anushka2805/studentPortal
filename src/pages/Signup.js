import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("registeredUsers")) || [];

    const alreadyExists = users.find((user) => user.email === form.email);
    if (alreadyExists) {
      setError("Email already registered ❌");
      return;
    }

    users.push(form);
    localStorage.setItem("registeredUsers", JSON.stringify(users));

    alert("Signup successful! ✅ Now log in.");
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900">
      <form
        onSubmit={handleSignup}
        className="bg-white dark:bg-gray-800 p-8 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-purple-600">
          Create Account
        </h2>

        <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          Name
        </label>
        <input
          type="text"
          name="name"
          required
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded dark:bg-gray-700 dark:text-white"
        />

        <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          Email
        </label>
        <input
          type="email"
          name="email"
          required
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded dark:bg-gray-700 dark:text-white"
        />

        <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          Password
        </label>
        <input
          type="password"
          name="password"
          required
          value={form.password}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded dark:bg-gray-700 dark:text-white"
        />

        {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded"
        >
          Sign Up
        </button>

        <p className="text-sm mt-4 text-center text-gray-600 dark:text-gray-300">
          Already have an account?{" "}
          <span
            className="text-purple-600 hover:underline cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Log in
          </span>
        </p>
      </form>
    </div>
  );
}

export default Signup;
