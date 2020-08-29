import React from "react";
const Button = ({ onPress, children }) => {
  return (
    <button onClick={onPress} className="button">
      {children}
    </button>
  );
};

export default Button;
