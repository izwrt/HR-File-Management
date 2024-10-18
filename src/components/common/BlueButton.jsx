import React from 'react';

const BlueButton = ({ label,saveHandle}) => {
  return (
    <button className="customColorBlue custom-font-mavan-pro homeUnitsFont py-2 font-semibold text-base px-8 rounded-lg "
    onClick={saveHandle}
    >
      {label}
    </button>
  );
};

export default BlueButton;
