import React from "react";
import { NavLink,Link } from "react-router-dom";
import { FiHome, FiCalendar, FiMenu, FiImage, FiSettings } from "react-icons/fi";

const Sidebar = () => {
  return (
    <aside className="w-64 h-full bg-white dark:bg-black border-r border-gray-200 dark:border-gray-800 flex flex-col">

      {/* Logo */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-800">
      <h1 className="text-xl font-bold tracking-widest text-gray-800 dark:text-white">
  <Link to="/">THYME</Link>
</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Admin Panel
        </p>
      </div>

      {/* Navigation */}
   <nav className="flex-1 flex flex-col justify-between p-4">

  {/* Top Menu */}
  <div className="space-y-2">

    <NavLink
      to="/adminPanel/reservationManagement"
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

  </div>


  {/* Bottom Menu */}
  <div className="space-y-2">

    <NavLink
      to="/adminPanel/profile"
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
      Profile
    </NavLink>

    <NavLink
      to="/adminPanel/settings"
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

  </div>

</nav>
    </aside>
  );
};

export default Sidebar;