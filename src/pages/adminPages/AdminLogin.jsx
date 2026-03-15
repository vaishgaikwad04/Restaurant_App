import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { showNotification } from "../../components/ui/Notification";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  /* CREATE ADMIN IF NOT EXIST */

  useEffect(() => {
    const admin = localStorage.getItem("admin");

    if (!admin) {
      localStorage.setItem(
        "admin",
        JSON.stringify({
          email: "admin@thyme.com",
          password: "123456",
        }),
      );
    }
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const storedAdmin = JSON.parse(localStorage.getItem("admin"));

    if (
      form.email === storedAdmin.email &&
      form.password === storedAdmin.password
    ) {
      localStorage.setItem("adminAuth", "true");

      showNotification("success", "Login successful");

      navigate("/adminPanel/reservationManagement");
    } else {
      showNotification("error", "Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-black px-4">
      
      <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8">

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            Admin Login
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            Access the admin dashboard
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">

          {/* Email */}
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-300">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="admin@thyme.com"
              value={form.email}
              onChange={handleChange}
              required
              className="mt-1 w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-300">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={form.password}
              onChange={handleChange}
              required
              className="mt-1 w-full p-3 border rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-black text-white font-semibold hover:bg-gray-800 transition dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
};

export default AdminLogin;
