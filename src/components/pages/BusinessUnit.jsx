import debounce from "lodash.debounce";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { CiFilter, CiSearch } from "react-icons/ci";
import apiFecthEmployees from "../../../api/apiFecthEmployees";
import BusinessunitPopup from "../common/BusinessunitPopup";
import CountContainer from "../common/CountContainer";
import EmployeeBusinessLog from "../common/EmployeeBusinessLog";
import NodataFound from "../common/NodataFound";
import BusinessUnitShimmer from "../common/SImmerComponents/BusinessUnitShimmer";
import CountContainerShimmer from "../common/SImmerComponents/CountContainerShimmer";

export default function BusinessUnit() {
  const { employees } = apiFecthEmployees();
  const [searchEmployee, setSearchEmployee] = useState("");
  const [popUp, setPopUp] = useState(false);
  const [selectedClients, setSelectedClients] = useState([]);
  const [selectedStatuses, setSelectedStatuses] = useState([]);
  const [isExiting, setIsExiting] = useState(false);
  const popupRef = useRef(null);
  const [cardShimmer, setCardShimmer] = useState(true);
  const clients = ["One Inc", "Slide", "Metaz"];
  const statuses = ["Active", "Inactive", "Relieved"];

  useEffect(() => {
    const fetchEmployees = () => {
      setTimeout(() => {
        setCardShimmer(false);
      }, 3000);
    };
    fetchEmployees();
  }, []);

  const handleChange = (e) => {
    setSearchEmployee(e.target.value);
  };

  const debouncedHandleChange = useMemo(() => {
    return debounce(handleChange, 300);
  }, []);

  const activeEmployeesCount = employees.filter(
    (emp) => emp.status === "Active"
  ).length;
  const inactiveEmployeesCount = employees.filter(
    (emp) => emp.status === "Inactive"
  ).length;
  const relievedEmployeesCount = employees.filter(
    (emp) => emp.status === "Relieved"
  ).length;
  const filteredemployees = useMemo(() => {
    return employees.filter((emp) => {
      const searchMatch =
        searchEmployee === "" ||
        emp.name.toLowerCase().includes(searchEmployee.toLowerCase()) ||
        emp.empid.toString().includes(searchEmployee);

      const clientMatch =
        selectedClients.length === 0 || selectedClients.includes(emp.client);
      const statusMatch =
        selectedStatuses.length === 0 || selectedStatuses.includes(emp.status);

      return searchMatch && clientMatch && statusMatch;
    });
  }, [employees, searchEmployee, selectedClients, selectedStatuses]);

  const onOpen = () => {
    setPopUp(true);
    setIsExiting(true);
  };

  const onClose = () => {
    setTimeout(() => {
      setPopUp(false);
    }, 300);
    setIsExiting(false);
  };

  const handleApplyFiltersBusinessUnit = (clients, statuses) => {
    setSelectedClients(clients);
    setSelectedStatuses(statuses);
    onClose();
  };

  return (
    <div className="relative mt-16 ml-[220px] 2xl:ml-[230px] md:ml-0 h-fit pl-8 pr-12 md:pl-5 md:pr-6">
      {employees.length !== 0 ? (
        <div className="grid grid-flow-col justify-between md:grid-rows-2 gap-10 py-6 ">
          <CountContainer
            smallText={`Active Employees`}
            largeNumber={activeEmployeesCount}
          />
          <CountContainer
            smallText={`Inactive Employees`}
            largeNumber={inactiveEmployeesCount}
          />
          <CountContainer
            smallText={`Relieved`}
            largeNumber={relievedEmployeesCount}
          />
        </div>
      ) : (
        <div className="grid grid-flow-col justify-between md:grid-rows-2 gap-10 py-6 ">
          <CountContainerShimmer />
          <CountContainerShimmer />
          <CountContainerShimmer />
        </div>
      )}

      <div className="xl:h-[35rem] 2xl:h-[44rem] md:h-[900px] pb-5">
        <div className="bg-white rounded-lg px-5 py-4 flex flex-col gap-3 h-full shadow-sm border-solid border border-slate-100 shadow-gray-200">
          <div className="flex justify-between items-center">
            <span className="text-black font-semibold text-base 2xl:text-base custom-font-mavan-pro opacity-80">
              Employees
            </span>
            <span className="flex gap-1 items-center">
              <label
                htmlFor="search"
                className="border border-slate-200 flex w-[200px] items-center rounded-lg p-[2px] px-[6px] gap-1.5 textbox-color"
              >
                <CiSearch className="size-5 stroke-1 h-fit opacity-40" />
                <input
                  type="text"
                  name="search"
                  className="w-full focus:outline-none textbox-color custom-font-mavan-pro opacity-80"
                  placeholder="Search"
                  onChange={debouncedHandleChange}
                />
              </label>
              <CiFilter onClick={onOpen} className="size-7 opacity-40" />
            </span>
          </div>

          <div
            className={`flex flex-col gap-3 h-full overflow-auto overflow-emp ${
              cardShimmer && "overflow-hidden"
            } scroll-smooth snap-scroll-b pb-7`}
          >
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

            {filteredemployees.length !== 0 ? (
              filteredemployees.map((emp) => (
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
              <div className="flex flex-col gap-3">
                {Array.from({ length: 10 }).map((_, index) => {
                  return <BusinessUnitShimmer key={index} />;
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      {popUp && (
        <BusinessunitPopup
          onClose={onClose}
          popupRef={popupRef}
          handleApplyFiltersBusinessUnit={handleApplyFiltersBusinessUnit}
          isExiting={isExiting}
          clients={clients}
          statuses={statuses}
          selectedClients={selectedClients}
          setSelectedClients={setSelectedClients}
          selectedStatuses={selectedStatuses}
          setSelectedStatuses={setSelectedStatuses}
        />
      )}
    </div>
  );
}
