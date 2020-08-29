import React from "react";

const TextInput = ({ placeholder, onChangeText }) => {
  return (
    <input
      className="text-input"
      type="text"
      placeholder={placeholder}
      onChange={(event) => onChangeText && onChangeText(event.target.value)}
    />
  );
};

export default TextInput;
