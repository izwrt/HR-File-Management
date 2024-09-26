import debounce from "lodash.debounce";
import React, { useMemo, useRef, useState } from 'react';
import { CiFilter, CiSearch } from "react-icons/ci";
import apiFecthEmployees from '../../../api/apiFecthEmployees';
import CountContainer from "../common/CountContainer";
import EmployeeBusinessLog from '../common/EmployeeBusinessLog';
import Filter from "../common/Filters";
import NodataFound from '../common/NodataFound';
import BusinessunitPopup from "../common/BusinessunitPopup";

export default function BusinessUnit() {
  const employeeDetails = apiFecthEmployees();
  const [searchEmployee, setSearchEmployee] = useState("");
  const [popUp, setPopUp] = useState(false);
  const [selectedClients, setSelectedClients] = useState([]);
  const [selectedStatuses, setSelectedStatuses] = useState([]);
  const [isExiting, setIsExiting] = useState(false);
  const popupRef = useRef(null);

  const handleChange = (e) => {
    setSearchEmployee(e.target.value);
  };

  const debouncedHandleChange = useMemo(() => {
    return debounce(handleChange, 300);
  }, []);

  const filteredEmployeeDetails = useMemo(() => {
    return employeeDetails.filter(emp => {
      const searchMatch = searchEmployee === "" || 
        emp.name.toLowerCase().includes(searchEmployee.toLowerCase()) ||
        emp.empid.toString().includes(searchEmployee);
      
      const clientMatch = selectedClients.length === 0 || selectedClients.includes(emp.client);
      const statusMatch = selectedStatuses.length === 0 || selectedStatuses.includes(emp.status);
      
      return searchMatch && clientMatch && statusMatch;
    });
  }, [employeeDetails, searchEmployee, selectedClients, selectedStatuses]);

  const onOpen = () => {
      setPopUp(true);
    setIsExiting(true)
  };

  const onClose = () => {
    setTimeout(() =>{
      setPopUp(false);
    },300)
    setIsExiting(false)
  };


  const handleApplyFilters = (clients, statuses) => {
    setSelectedClients(clients);
    setSelectedStatuses(statuses);
    onClose();
  };

  return (
    <div className="relative mt-16 ml-[220px] md:ml-0 h-fit">
      <div className="p-8 pr-12 flex gap-[12%] 2xl:h-[220px] md:bg-green-400 md:px-4">
        <CountContainer smallText={`Active Employees`} largeNumber={`999`} />
        <CountContainer smallText={`Inactive Employees`} largeNumber={`999`} />
        <CountContainer smallText={`Relieved`} largeNumber={`999`} />
      </div>

      <div className="xl:h-[35rem] 2xl:h-[44rem] pl-8 pr-12 pb-5 md:bg-red-400 md:px-4">
        <div className="bg-white rounded-lg px-5 py-4 flex flex-col gap-3 h-full shadow-sm border-solid border border-slate-100 shadow-gray-200 overflow-y-auto">
          <div className="flex justify-between items-center">
            <span className="text-black font-semibold text-base 2xl:text-base custom-font-mavan-pro opacity-80">Employees</span>
            <span className="flex gap-1 items-center">
              <label htmlFor="search" className="border border-slate-200 flex w-[200px] items-center rounded-lg p-[2px] px-[6px] gap-1.5 textbox-color">
                <CiSearch className="size-5 stroke-1 h-fit opacity-40" />
                <input type="text" name="search" className="w-full focus:outline-none textbox-color custom-font-mavan-pro opacity-80" placeholder="Search" onChange={debouncedHandleChange} />
              </label>
              <CiFilter onClick={onOpen} className="size-7 opacity-40" />
            </span>
          </div>

          <div className="flex flex-col gap-3 h-full overflow-auto">
            <div className="sticky top-0 z-10 backdrop-blur-sm md:w-[1000px]">
              <EmployeeBusinessLog
                employeeName="Employee Name"
                client={"Client"}
                startDate={"Start Date"}
                endDate={"End Date"}
                status={"Status"}
                action={"Action"}
                color="customColorBlue-lite"
                fontWeight={"font-semibold"}
                id={"Employee Id"}
              />
            </div>

            {filteredEmployeeDetails.length !== 0 ? (
              filteredEmployeeDetails.map((emp) => (
                <EmployeeBusinessLog
                  key={emp.empid}
                  employeeName={emp.name}
                  client={emp.client}
                  startDate={emp.startDate}
                  endDate={emp.endDate}
                  status={emp.status}
                  action={"Action"}
                  color="textbox-color"
                  fontWeight={"font-medium"}
                  id={emp.empid}
                />
              ))
            ) : (
              <NodataFound />
            )}
          </div>
        </div>
      </div>

      {popUp && (
        <BusinessunitPopup onClose={onClose} popupRef={popupRef} handleApplyFilters={handleApplyFilters} isExiting={isExiting}/>
      )}
    </div>
  );
}
