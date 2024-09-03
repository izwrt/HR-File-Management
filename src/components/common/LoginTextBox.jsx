import React from "react";

export default function LoginTextBox({
  placeholder,
  type,
  isTrue,
  dispatch,
  value,
  name,
}) {
  function handleChange(e) {
    dispatch({
      type: name,
      payload: e.target.value,
    });
  }

  return (
    <input
      className={`rounded-2xl font-normal placeholder:font-normal placeholder:text-lg px-4 p-2            
                focus:outline-customBlue text-xl bg-transparent border-[1px] text-gray-600 ${
                  isTrue ? "border-gray-400" : "border-red-400"
                }`}
      placeholder={placeholder}
      type={type}
      onChange={handleChange}
      value={value}
    />
  );
}
