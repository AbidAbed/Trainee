import React from "react";

const Button = ({ value, onChange, className }) => {
  return (
    <button
      onClick={onChange}
      className={
        "px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800 shadow-md " +
        className
      }
    >
      {value}
    </button>
  );
};

export default Button;
