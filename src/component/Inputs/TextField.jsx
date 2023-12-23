import React from "react";

export default function TextField({
  title,
  placeholder,
  value,
  handleChange,
  required,
  error
}) {
  return (
    <div className="flex flex-col items-start my-3 w-full">
      <label className={`font-medium text-base ${title ? 'opacity-100' : 'opacity-0'}`}>{title || 'blank'}<span className="text-red-500">{required && '*'}</span></label>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
        className="w-full text-gray-700 border border-gray-300 rounded-md p-2 mt-1"
      />
      <p className="text-red-500 pl-2">{error}</p>
    </div>
  );
}
