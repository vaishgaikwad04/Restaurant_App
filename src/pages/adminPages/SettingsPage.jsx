import React, { useState, useEffect } from "react";
import Toggle from "../../components/ui/Toggle";
import {
  FiBell,
  FiMoon,
  FiCalendar,
  FiGrid,
  FiLock,
  FiLogOut,
  FiChevronRight,
  FiChevronDown
} from "react-icons/fi";

const Settings = () => {

  const [active, setActive] = useState(null);

  /* APP SETTINGS */

  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem("appSettings");
    return saved
      ? JSON.parse(saved)
      : {
          notifications: true,
          darkMode: false
        };
  });

  /* BOOKING LIMITS */

  const [limits, setLimits] = useState(() => {
    const saved = localStorage.getItem("bookingLimits");
    return saved
      ? JSON.parse(saved)
      : {
          maxSlotBookings: "",
          maxDailyBookings: ""
        };
  });

  /* SLOT LIMITS */

  const [slots, setSlots] = useState(() => {
    const saved = localStorage.getItem("slotLimits");
    return saved
      ? JSON.parse(saved)
      : {
          slotDuration: "",
          tablesPerSlot: ""
        };
  });

  /* PASSWORD STATE */

  const [passwords, setPasswords] = useState({
    current: "",
    new: ""
  });

  const toggle = (key) => {
    setSettings({
      ...settings,
      [key]: !settings[key]
    });
  };

  const toggleSection = (section) => {
    setActive(active === section ? null : section);
  };

  /* PASSWORD INPUT CHANGE */

  const handlePasswordChange = (e) => {
    setPasswords({
      ...passwords,
      [e.target.name]: e.target.value
    });
  };

  /* UPDATE PASSWORD */

  const handleUpdatePassword = () => {

    const admin = JSON.parse(localStorage.getItem("admin"));

    if (!admin) {
      alert("Admin not found");
      return;
    }

    if (passwords.current !== admin.password) {
      alert("Current password is incorrect");
      return;
    }

    const updatedAdmin = {
      ...admin,
      password: passwords.new
    };

    localStorage.setItem("admin", JSON.stringify(updatedAdmin));

    alert("Password updated successfully");

    setPasswords({
      current: "",
      new: ""
    });

  };

  /* SAVE SETTINGS */

  useEffect(() => {
    localStorage.setItem("appSettings", JSON.stringify(settings));
  }, [settings]);

  /* SAVE BOOKING LIMITS */

  useEffect(() => {
    localStorage.setItem("bookingLimits", JSON.stringify(limits));
  }, [limits]);

  /* SAVE SLOT LIMITS */

  useEffect(() => {
    localStorage.setItem("slotLimits", JSON.stringify(slots));
  }, [slots]);

  /* DARK MODE */

  useEffect(() => {
    if (settings.darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [settings.darkMode]);

  /* LOGOUT */

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    window.location.href = "/login";
  };

  return (
    <div className="h-full">

      {/* HEADER */}

      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white mt-4">
          App Settings
        </h1>

        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Manage system preferences for your dashboard
        </p>
      </div>

      <div className="max-w-8xl bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow">

        {/* TOGGLE SETTINGS */}

        <div className="p-6 space-y-5 border-b border-gray-200 dark:border-gray-700">

          <div className="flex items-center gap-3">
            <FiBell className="text-gray-500 dark:text-white" />

            <div className="flex-1">
              <Toggle
                label ="App Notifications"
                description="Show booking alerts inside dashboard"
                checked={settings.notifications}
                onChange={() => toggle("notifications")}
                 className='dark:text-white '
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <FiMoon className="text-gray-500 dark:text-white" />

            <div className="flex-1 dark:text-white">
              <Toggle
                label="Dark Mode"
                description="Switch dashboard theme"
                checked={settings.darkMode}
                onChange={() => toggle("darkMode")}
                className='dark:text-white'
              />
            </div>
          </div>

        </div>

        {/* BOOKING LIMITS */}

        <SettingItem
          icon={<FiCalendar />}
          title="Booking Limits"
          active={active === "limits"}
          onClick={() => toggleSection("limits")}
        >

          <input
            type="number"
            min="0"
            placeholder="Max bookings per slot"
            value={limits.maxSlotBookings}
            onChange={(e) =>
              setLimits({ ...limits, maxSlotBookings: e.target.value })
            }
            className="w-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg px-3 py-2 mb-3"
          />

          <input
            type="number"
            min="0"
            placeholder="Max bookings per day"
            value={limits.maxDailyBookings}
            onChange={(e) =>
              setLimits({ ...limits, maxDailyBookings: e.target.value })
            }
            className="w-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg px-3 py-2"
          />

        </SettingItem>

        {/* TABLE SLOT LIMITS */}

        <SettingItem
          icon={<FiGrid />}
          title="Table Slot Limits"
          active={active === "slots"}
          onClick={() => toggleSection("slots")}
        >

          <input
            type="number"
            min="0"
            placeholder="Slot duration (minutes)"
            value={slots.slotDuration}
            onChange={(e) =>
              setSlots({ ...slots, slotDuration: e.target.value })
            }
            className="w-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg px-3 py-2 mb-3"
          />

          <input
            type="number"
            min="0"
            placeholder="Tables allowed per slot"
            value={slots.tablesPerSlot}
            onChange={(e) =>
              setSlots({ ...slots, tablesPerSlot: e.target.value })
            }
            className="w-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg px-3 py-2"
          />

        </SettingItem>

        {/* CHANGE PASSWORD */}

        <SettingItem
          icon={<FiLock />}
          title="Change Password"
          active={active === "password"}
          onClick={() => toggleSection("password")}
        >

          <input
            type="password"
            name="current"
            placeholder="Current Password"
            value={passwords.current}
            onChange={handlePasswordChange}
            className="w-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg px-3 py-2 mb-3"
          />

          <input
            type="password"
            name="new"
            placeholder="New Password"
            value={passwords.new}
            onChange={handlePasswordChange}
            className="w-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg px-3 py-2"
          />

          <button
            onClick={handleUpdatePassword}
            className="mt-3 px-4 py-2 bg-black text-white rounded-lg dark:bg-white dark:text-black"
          >
            Update Password
          </button>

        </SettingItem>

        {/* LOGOUT */}

        <div className="p-6 flex justify-end items-center gap-2 text-red-500 dark:text-red-400">

          <FiLogOut />

          <button onClick={handleLogout} className="hover:underline">
            Logout
          </button>

        </div>

      </div>

    </div>
  );
};

const SettingItem = ({ icon, title, active, onClick, children }) => (

  <div className="border-b border-gray-200 dark:border-gray-700 last:border-none">

    <button
      onClick={onClick}
      className="w-full flex justify-between items-center px-6 py-5 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
    >

      <div className="flex items-center gap-3 text-gray-700 dark:text-gray-200">
        {icon}
        <span className="font-medium">{title}</span>
      </div>

      {active ? (
        <FiChevronDown className="text-gray-400" />
      ) : (
        <FiChevronRight className="text-gray-400" />
      )}

    </button>

    {active && (
      <div className="px-6 pb-6 space-y-3">
        {children}
      </div>
    )}

  </div>

);

export default Settings;