import React from "react";

export function TodoInput({ value, setValue, placeholder }) {
  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <input
      type="text"
      onChange={handleChange}
      value={value}
      placeholder={placeholder}
    />
  );
}
