import React from "react";

const TextInput = ({
  placeholder,
  onChangeText,
  className,
  onEnterPressed,
}) => {
  return (
    <input
      className={`text-input ${className}`}
      type="text"
      placeholder={placeholder}
      onChange={(event) => onChangeText && onChangeText(event.target.value)}
      onKeyPress={(event) =>
        onEnterPressed &&
        event.key === "Enter" &&
        onEnterPressed(event.target.value)
      }
    />
  );
};

export default TextInput;
