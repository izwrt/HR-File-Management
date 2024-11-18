import React from 'react';

const BlueButton = ({ children,label,onClick,h,}) => {
  return (
    <button className={`customColorBlue custom-font-mavan-pro homeUnitsFont py-2 font-semibold text-sm px-6 rounded-lg h-${h}`}
    onClick={onClick}
    >
      {label}
      {children}
    </button>
  );
};

export default BlueButton;
