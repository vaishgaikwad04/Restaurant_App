import React from "react";

const Dropdown = ({ title, name, value, onChange, options ,label, className}) => {
  return (
    <div className="flex justify-between items-center mb-4">

      <h2 className="text-xl font-semibold dark:text-white">
        {title}
      </h2> 
   <div className="flex flex-col">
      <label className="mb-2">{label}</label>
      <select
        name={name}   
        value={value}
        onChange={onChange}
        className={` px-3 py-2 text-sm rounded-md border
        bg-white text-gray-700 border-gray-300
        dark:bg-[#111111] dark:text-gray-300 dark:border-gray-700
        focus:outline-none focus:ring-1 focus:ring-gray-400 ${className}`}
       
        
      >

        <option value="">Select Category</option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}

      </select>
   
   </div>
      


    </div>
  );
};

export default Dropdown;