import React from "react";

const InputField = ({ label, type = "text", name, value, onChange, placeholder, ...rest }) => {
  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={name}
          className="block mb-2 font-medium text-[#2b2b2b]"
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
        {...rest} // <-- THIS MAKES required, min, max, etc. work
        className={`
          w-full
          p-3
          rounded-lg
          border border-[#e0e0e0]
          bg-[#f0e6d2]
          text-[#2b2b2b]
          placeholder-gray-400
          outline-none
          focus:border-[#2b2b2b]
          focus:ring-2
          focus:ring-[#1f1f1f33]
          transition
          duration-200
        `}
      />
    </div>
  );
};

export default InputField;