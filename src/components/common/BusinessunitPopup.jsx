import React from "react";
import Filter from "./Filters";

const BusinessunitPopup = ({
  popupRef,
  handleApplyFiltersBusinessUnit,
  handleApplyFiltersDashboard,
  onClose,
  isExiting,
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
  return (
    <div
      ref={popupRef}
      className={`bg-black fixed h-full w-full bg-opacity-30 top-0 z-50 left-0 right-0 flex justify-center items-center backdrop-blur-sm ${
        isExiting ? "popup" : "popup-exit"
      }`}
    >
      <div className="bg-white h-fit w-fit rounded-lg">
        <Filter
          onClose={onClose}
          onApplyBusinessUnit={handleApplyFiltersBusinessUnit}
          onApplyDashboard={handleApplyFiltersDashboard}
          clients={clients}
          statuses={statuses}
          units={units}
          departments={departments}
          selectedClients={selectedClients}
          setSelectedClients={setSelectedClients}
          selectedStatuses={selectedStatuses}
          setSelectedStatuses={setSelectedStatuses}
          setSelectedDepartment={setSelectedDepartment}
          setSelectedUnits={setSelectedUnits}
          selectedDepartment={selectedDepartment}
          selectedUnits={selectedUnits}
        />
      </div>
    </div>
  );
};

export default BusinessunitPopup;
