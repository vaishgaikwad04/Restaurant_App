import React from "react";
import { NavLink } from "react-router-dom";
import { FiHome, FiCalendar, FiMenu, FiImage, FiSettings } from "react-icons/fi";

const Sidebar = () => {
  return (
    <aside className="w-64 h-full bg-white dark:bg-black border-r border-gray-200 dark:border-gray-800 flex flex-col">

      {/* Logo */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-800">
        <h1 className="text-xl font-bold tracking-widest text-gray-800 dark:text-white">
          THYME
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Admin Panel
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">

        <NavLink
          to="/admin/adminDashboard"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-lg transition
            ${
              isActive
                ? "bg-gray-200 dark:bg-gray-800 text-black dark:text-white"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            }`
          }
        >
          <FiHome />
          Dashboard
        </NavLink>

        <NavLink
          to="/admin/reservations"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-lg transition
            ${
              isActive
                ? "bg-gray-200 dark:bg-gray-800 text-black dark:text-white"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            }`
          }
        >
          <FiCalendar />
          Reservations
        </NavLink>

        <NavLink
          to="/admin/menu"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-lg transition
            ${
              isActive
                ? "bg-gray-200 dark:bg-gray-800 text-black dark:text-white"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            }`
          }
        >
          <FiMenu />
          Menu
        </NavLink>

        <NavLink
          to="/admin/gallery"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-lg transition
            ${
              isActive
                ? "bg-gray-200 dark:bg-gray-800 text-black dark:text-white"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            }`
          }
        >
          <FiImage />
          Gallery
        </NavLink>

        <NavLink
          to="/admin/settings"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-lg transition
            ${
              isActive
                ? "bg-gray-200 dark:bg-gray-800 text-black dark:text-white"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            }`
          }
        >
          <FiSettings />
          Settings
        </NavLink>

      </nav>

    </aside>
  );
};

export default Sidebar;