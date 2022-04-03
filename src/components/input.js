import React from "react";

const Input = ({
  label,
  name,
  type,
  required,
  placeholder,
  showLabel,
  handleChange,
}) => {
  return (
    <div>
      <label for={name} className={showLabel ? "" : "sr-only"}>
        {label}
      </label>

      <input
        name={name}
        type={type}
        required={required}
        class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-2"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
