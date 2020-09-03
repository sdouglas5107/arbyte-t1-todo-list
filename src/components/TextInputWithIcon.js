import React from "react";
import TextInput from "./TextInput";
import Icon from "./Icon";

const TextInputWithIcon = ({ placeholder, onChangeText, icon, onPress }) => {
  return (
    <div className="text-input-with-icon-container">
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        onEnterPressed={onPress}
      />
      <Icon icon={icon} onPress={onPress} />
    </div>
  );
};
export default TextInputWithIcon;
