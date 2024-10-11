import React, { useState } from "react";
import Close from "../../assets/images/close.png";
import { useLocation } from "react-router-dom";

const Filter = ({
  onClose,
  onApplyBusinessUnit,
  onApplyDashboard,
  clients = [],
  statuses = [],
  units = [],
  departments = [],
  selectedClients,
  setSelectedClients,
  selectedStatuses,
  setSelectedStatuses,
  setSelectedDepartment,
  setSelectedUnits,
  selectedDepartment,
  selectedUnits,
}) => {
  const location = useLocation();

  console.log(location.pathname);

  const handleClientChange = (client) => {
    setSelectedClients((prev) =>
      prev.includes(client)
        ? prev.filter((c) => c !== client)
        : [...prev, client]
    );
  };

  const handleUnitChange = (unit) => {
    setSelectedUnits((prev) =>
      prev.includes(unit) ? prev.filter((u) => u !== unit) : [...prev, unit]
    );
  };

  const handleStatusChange = (status) => {
    setSelectedStatuses((prev) =>
      prev.includes(status)
        ? prev.filter((s) => s !== status)
        : [...prev, status]
    );
  };

  const handleDepartmentsChange = (department) => {
    setSelectedDepartment((prev) =>
      prev.includes(department)
        ? prev.filter((d) => d !== department)
        : [...prev, department]
    );
  };

  const clearButtonFilter = () => {
    if (location.pathname === "/dashboard") {
      setSelectedDepartment([]);
      setSelectedUnits([]);
    } else {
      setSelectedClients([]);
      setSelectedStatuses([]);
    }
  };

  return (
    <div className="flex flex-col gap-4 py-4 px-6 ">
      <div className="custom-font-mavan-pro text-lg flex items-center justify-between font-semibold  text-gray-950 text-opacity-70">
        Search filters
        <button
          className="cursor-pointer w-5 h-fit rounded-full overflow-hidden transition-all ease-in-out  duration-300 hover:scale-90 hover:opacity-60 focus:bg-slate-200"
          onClick={onClose}
        >
          <img src={Close} alt="" />
        </button>
      </div>
      <div>
        <span className="flex gap-20">
          <div className="flex flex-col gap-2">
            {clients.length !== 0 && (
              <>
                <h4 className="border-b border-gray-500 custom-font-mavan-pro pb-2 pr-16 mb-2 text-base">
                  Client
                </h4>
                {clients.map((client) => (
                  <label
                    key={client}
                    className={`custom-font-mavan-pro text-base  ${
                      selectedClients.includes(client)
                        ? "opacity-90"
                        : "opacity-70"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={selectedClients.includes(client)}
                      onChange={() => handleClientChange(client)}
                      className="mr-2"
                    />
                    {client}
                  </label>
                ))}
              </>
            )}
            {units.length !== 0 && (
              <>
                <h4 className="border-b border-gray-500 custom-font-mavan-pro pb-2 pr-16 mb-2 text-base">
                  Unit
                </h4>
                {units.map((unit) => (
                  <label
                    key={unit}
                    className={`custom-font-mavan-pro text-base  ${
                      selectedUnits.includes(unit) ? "opacity-90" : "opacity-70"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={selectedUnits.includes(unit)}
                      onChange={() => handleUnitChange(unit)}
                      className="mr-2"
                    />
                    {unit}
                  </label>
                ))}
              </>
            )}
          </div>

          <div className="flex flex-col gap-2">
            {statuses.length !== 0 && (
              <>
                <h4 className="border-b border-gray-500 custom-font-mavan-pro pb-2 pr-16 mb-2 text-base">
                  Status
                </h4>
                {statuses.map((status) => (
                  <label
                    key={status}
                    className={`custom-font-mavan-pro text-base  ${
                      selectedStatuses.includes(status)
                        ? "opacity-90 "
                        : "opacity-70"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={selectedStatuses.includes(status)}
                      onChange={() => handleStatusChange(status)}
                      className="mr-2 custom-font-mavan-pro"
                    />
                    {status}
                  </label>
                ))}
              </>
            )}
            {departments.length !== 0 && (
              <>
                <h4 className="border-b border-gray-500 custom-font-mavan-pro pb-2 pr-16 mb-2 text-base">
                  Departments
                </h4>
                {departments.map((department) => (
                  <label
                    key={department}
                    className={`custom-font-mavan-pro text-base  ${
                      selectedDepartment.includes(department)
                        ? "opacity-90 "
                        : "opacity-70"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={selectedDepartment.includes(department)}
                      onChange={() => handleDepartmentsChange(department)}
                      className="mr-2 custom-font-mavan-pro"
                    />
                    {department}
                  </label>
                ))}
              </>
            )}
          </div>
        </span>
      </div>
      <div className="flex flex-row gap-14 items-center justify-center">
        <button
          className="text-black customColorBlue-lite h-fit rounded-lg cursor-pointer px-4 py-2 w-fit custom-font-mavan-pro self-center mt-2 text-opacity-80 hover:opacity-70 hover:scale-95 transition-all duration-100"
          onClick={clearButtonFilter}
        >
          Clear
        </button>
        <button
          className="text-black customColorBlue-lite h-fit rounded-lg cursor-pointer px-4 py-2 w-fit custom-font-mavan-pro self-center mt-2 text-opacity-80 hover:opacity-70 hover:scale-95 transition-all duration-100"
          onClick={onClose}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default Filter;
