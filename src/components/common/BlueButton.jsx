import React from "react";

const BlueButton = ({ children, label, onClick, h }) => {
  return (
    <button
      className={`customColorBlue custom-font-mavan-pro homeUnitsFont py-2 font-semibold text-sm px-6 rounded-md h-${h} active:translate-y-1 hover: shadow-xl active:shadow-sm transition-all duration-200`}
      onClick={onClick}
    >
      {label}
      {children}
    </button>
  );
};

export default BlueButton;
