import React from "react";

const TextInput = ({ placeholder, onChangeText, className }) => {
  return (
    <input
      className={`text-input ${className}`}
      type="text"
      placeholder={placeholder}
      onChange={(event) => onChangeText && onChangeText(event.target.value)}
    />
  );
};

export default TextInput;
