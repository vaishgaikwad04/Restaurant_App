import React, { useState, useEffect } from "react";
import { FiBell, FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [pendingCount, setPendingCount] = useState(0);

  useEffect(() => {
    const loadData = () => {
      const savedProfile = JSON.parse(localStorage.getItem("profile"));
      if (savedProfile) {
        setUser(savedProfile);      }

      const reservations =
        JSON.parse(localStorage.getItem("reservations")) || [];

      const pendingReservations = reservations.filter(
        (r) => r.status === "Pending" || r.status === "pending",
      );

      setPendingCount(pendingReservations.length);
    };

    loadData();

    window.addEventListener("storage", loadData);

    return () => {
      window.removeEventListener("storage", loadData);
    };
  }, []);

  return (
    <header className="w-full h-16 flex items-center justify-between px-6 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
      <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
        Admin Dashboard
      </h1>

      <div className="flex items-center gap-6">
        <button
          onClick={() => navigate("/adminPanel/reservationManagement")}
          className="relative text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
        >
          <FiBell size={20} />

          {pendingCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {pendingCount}
            </span>
          )}
        </button>

        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-9 h-9 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
            {user?.image ? (
              <img
                src={user.image}
                alt="profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <FiUser />
            )}
          </div>

          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            <h1>Manager</h1>
            {user?.firstName
              ? `${user.firstName} ${user.lastName || ""}`
              : "Admin"}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
