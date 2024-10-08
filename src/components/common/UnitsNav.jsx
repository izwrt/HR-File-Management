import React, { useState } from "react";

const UnitsNav = () => {
  const [selectedUnit, setSelectedUnit] = useState(null);

  const businessUnitsStatus = [
    { name: "Invenger Technologies", active: 120, inactive: 10 },
    { name: "Invenger Solutions", active: 90, inactive: 5 },
    { name: "Instarak", active: 150, inactive: 12 },
  ];

  const handleCardClick = (index) => {
    setSelectedUnit(index);
  };

  return (
    <div className="flex justify-start gap-5 pl-10">
      {businessUnitsStatus.map((unit, index) => (
        <div
          key={index}
          onClick={() => handleCardClick(index)}
          className={`w-40 h-9 rounded-3xl drop-shadow flex items-center justify-center cursor-pointer ${
            selectedUnit === index
              ? "homeUnitNavSelected homeUnitsFont"
              : "homeUnitNavUnSelected homeUnitsFont"
          }`}
        >
          <h2 className="font-normal text-sm">{unit.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default UnitsNav;
