import React from "react";

const UnitsStatus= () => {
  const businessUnitsStatus = [
    { name: "Invenger Technologies", active: 120, inactive: 10 },
    { name: "Invenger Solutions", active: 90, inactive: 5 },
    { name: "Instarak", active: 150, inactive: 12 },
  ];

  return (
    <div className="flex justify-around gap-10 pl-10 pr-10 ">
      {businessUnitsStatus.map((unit, index) => (
        <div
          key={index}
          className=" customWhiteColor w-1/3 rounded-3xl drop-shadow text-center    "
        >
          <h2 className="custom-font-raleway homeFontColor  font-medium text-2xl pt-8 p-4 text-center">
            {unit.name}
          </h2>
          <div className="flex justify-center gap-12  pb-8  font-semibold homeActiveColor text-xl">
            <div className="text-center custom-font-mavan-pro  ">
              <p>Active</p>
              <p>{unit.active}</p>
            </div>
            <div className="text-center homeInactiveColor  custom-font-mavan-pro">
              <p>Inactive</p>
              <p>{unit.inactive}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UnitsStatus;
