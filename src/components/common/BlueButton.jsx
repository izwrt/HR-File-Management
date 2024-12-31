import React from "react";

const BlueButton = ({ children, label, onClick, h }) => {
  return (
    <button
      className={`customColorBlue custom-font-mavan-pro homeUnitsFont py-2 font-semibold text-sm px-6 rounded-md h-${h} hover:-translate-y-2 active:-translate-y-1 hover: shadow-xl hover:shadow-xl active:shadow-sm transition-all duration-500`}
      onClick={onClick}
    >
      {label}
      {children}
    </button>
  );
};

export default BlueButton;
