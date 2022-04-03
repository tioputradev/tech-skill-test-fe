import React from "react";

const Button = ({ title, type, handleOnClick }) => {
  return (
    <button
      type={type}
      onClick={handleOnClick}
      class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-sm text-white bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      {title}
    </button>
  );
};

export default Button;
