import React from "react";

const Input = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  className = "",
  ...rest
}) => {
  return (
    <div className="mb-4 w-full">
      {label && (
        <label
          htmlFor={name}
          className="block mb-2 font-medium text-[#2b2b2b] dark:text-white"
        >
          {label}
        </label>
      )}

      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...rest}
        className={`
w-full p-3 rounded-lg border outline-none transition duration-200
bg-white text-[#2b2b2b] border-[#e0e0e0]
dark:bg-[#1a1a1a] dark:text-white dark:border-gray-700
placeholder-gray-400 dark:placeholder-gray-500
focus:ring-2 focus:ring-black/10 dark:focus:ring-white/10
appearance-none
`}
      />
    </div>
  );
};

export default Input;
