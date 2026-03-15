import React from "react";

const Button = ({ children, onClick, className }) => {
  return (
    <button
      className={` px-6 py-3  rounded-md font-medium hover:scale-105 transition duration-300 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;