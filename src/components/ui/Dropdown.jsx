import React from "react";

const Dropdown = ({ title, value, onChange, options }) => {
  return (
    <div className="flex justify-between items-center mb-4">

      <h2 className="text-xl font-semibold dark:text-white">
        {title}
      </h2>

      <select
        value={value}
        onChange={onChange}
        className="
        px-3 py-2 text-sm rounded-md border
        bg-white text-gray-700 border-gray-300
        dark:bg-[#111111] dark:text-gray-300 dark:border-gray-700
        focus:outline-none focus:ring-1 focus:ring-gray-400
        "
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

    </div>
  );
};

export default Dropdown;