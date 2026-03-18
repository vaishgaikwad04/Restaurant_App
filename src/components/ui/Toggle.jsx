import React, { useState } from "react";

const Toggle = ({
  label,
  description,
  checked = false,
  onChange,
  className,
}) => {
  const [enabled, setEnabled] = useState(checked);

  const handleToggle = () => {
    setEnabled(!enabled);
    if (onChange) onChange();
  };

  return (
    <div className="flex items-center justify-between">
      <div>
        <p className={`text-gray-800 font-medium ${className}`}>{label}</p>

        {description && <p className="text-sm text-gray-500">{description}</p>}
      </div>

      <button
        onClick={handleToggle}
        className={`relative w-12 h-6 flex items-center rounded-full transition ${
          enabled ? "bg-green-500" : "bg-gray-300"
        }`}
      >
        <span
          className={`bg-white w-5 h-5 rounded-full shadow transform transition ${
            enabled ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
};

export default Toggle;
