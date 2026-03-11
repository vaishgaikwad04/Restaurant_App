import React from "react";
import { FiBell, FiUser } from "react-icons/fi";

const Header = () => {
  return (
    <header className="w-full h-16 flex items-center justify-between px-6 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-black">

      {/* Page Title */}
      <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
        Admin Dashboard
      </h1>

      {/* Right Section */}
      <div className="flex items-center gap-6">

        {/* Notification */}
        <button className="relative text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition">
          <FiBell size={20} />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Admin Profile */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-9 h-9 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
            <FiUser />
          </div>

          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Admin
          </span>
        </div>

      </div>
    </header>
  );
};

export default Header;