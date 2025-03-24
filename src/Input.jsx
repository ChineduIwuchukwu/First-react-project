import React from "react";

// how to access a property from a component
// onchange is used to accept the value been inputted in the value and it accepts a function
const Input = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
