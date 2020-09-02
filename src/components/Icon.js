import React from "react";
const Icon = ({ icon, onPress }) => {
  return <i className={`fa fa-${icon}`} onClick={onPress} />;
};

export default Icon;
