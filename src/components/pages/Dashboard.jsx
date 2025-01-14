import debounce from "lodash.debounce";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { CiFilter, CiSearch } from "react-icons/ci";
import apiFecthEmployees from "../../../api/apiFecthEmployees";
import Add_Admin from "../../assets/images/Add_Admin";
import AdminCard from "../common/AdminCard";
import BusinessunitPopup from "../common/BusinessunitPopup";
import CountContainer from "../common/CountContainer";
import EmployeeCard from "../common/EmployeeCard";
import SettingsPopup from "../common/SettingsPopup";
import CountContainerShimmer from "../common/SImmerComponents/CountContainerShimmer";
import EmployeeCardShimmer from "../common/SImmerComponents/EmployeeCardShimmer";
import NodataFound from "../common/NodataFound";
import axios from "../../../api/axios";

function Dashboard() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    const apiEmployees = async () => {
      const response = await axios.get("/api/v1/employee/get-all-employees", {
        withCredentials: true,
      });
      console.log(response.data);
      setEmployees(response.data);
    };
    apiEmployees();
  }, []);

  const [searchEmployee, setSearchEmployee] = useState("");
  const [selectedUnits, setSelectedUnits] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState([]);
  const [popUpSettings, setPopUpSettings] = useState(false);
  const [isExitingSettings, setIsExitingSettings] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [popUp, setPopUp] = useState(false);
  const popUpRef = useRef(null);
  const [cardShimmer, setCardShimmer] = useState(false);
  const units = ["Invenger Technologies", "Invenger Solutions", "Instarack"];
  const departments = ["HR", "Finance", "IT"];
  const [isLoading, setIsLoading] = useState(false);

  const openPopUp = () => {
    setPopUp(true);
    setIsExiting(true);
  };
  const activeEmployeesCount = employees.filter((emp) => {
    return emp.status === 1;
  }).length;

  const inActiveEmployeesCount = employees.filter((emp) => {
    return emp.status === 2;
  }).length;

  const closePopUp = () => {
    setTimeout(() => {
      setPopUp(false);
    }, 300);
    setIsExiting(false);
  };

  const handleApplyFiltersDashboard = (Units, Department) => {
    setSelectedUnits(Units);
    setSelectedDepartment(Department);
  };

  const handleChange = (e) => {
    setIsLoading(false);
    setSearchEmployee(e.target.value);
  };

  const debouncedHandleChange = useMemo(() => {
    return debounce((event) => {
      handleChange(event);
    }, 300);
  }, []);

  const handleInputChange = (e) => {
    setIsLoading(true);
    debouncedHandleChange(e);
  };

  console.log("isloading", isLoading);

  const filteredemployees = useMemo(() => {
    return employees.filter((emp) => {
      const searchMatch =
        searchEmployee === "" ||
        emp.firstName.toLowerCase().includes(searchEmployee.toLowerCase()) ||
        emp.employeeId.toString().includes(searchEmployee);

      const unitMatch =
        selectedUnits.length === 0 || selectedUnits.includes(emp.unit);
      const departmentMatch =
        selectedDepartment.length === 0 ||
        selectedDepartment.includes(emp.department);

      return searchMatch && unitMatch && departmentMatch;
    });
  }, [employees, searchEmployee, selectedUnits, selectedDepartment]);

  const openSettings = () => {
    setPopUpSettings(true);
    setIsExitingSettings(true);
  };

  const onCloseSettings = () => {
    setTimeout(() => {
      setPopUpSettings(false);
    }, 300);
    setIsExitingSettings(false);
  };
  return (
    <div className="flex flex-row relative mt-16 ml-[220px] 2xl:ml-[230px] md:ml-0 h-fit pl-8 pr-12 md:pl-5 md:pr-6 gap-8">
      <div className="flex flex-col md:w-full w-[70%] 2xl:w-full 2xl:h-full ">
        {employees.length !== 0 ? (
          <div className="grid grid-flow-col justify-between md:grid-rows-1 gap-10 py-9">
            <CountContainer
              smallText={`Active Employees`}
              largeNumber={activeEmployeesCount}
            />
            <CountContainer
              smallText={`Active / Idle Employees`}
              largeNumber={inActiveEmployeesCount}
            />
          </div>
        ) : (
          <div className="grid grid-flow-col justify-between md:grid-rows-1 gap-10 py-9">
            <CountContainerShimmer />
            <CountContainerShimmer />
          </div>
        )}
        <div className="xl:h-[35rem] 2xl:h-[44rem] pb-5 md:h-[900px]  w-full">
          <div
            className={`bg-white rounded-lg w-full flex flex-col gap-3 h-full shadow-sm border-solid border border-slate-100 shadow-gray-200 snap-scroll-d overflow-y-auto overflow scroll-smooth scroll-padding`}
          >
            <div className="bg-white backdrop-blur-sm  z-10 sticky top-0 rounded-lg w-full">
              <div className="flex items-center justify-between flex-grow px-5">
                <div className="font-semibold mb-4 pt-4 text-base custom-font-mavan-pro opacity-80">
                  Employees
                </div>
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
                      onChange={handleInputChange}
                      autoComplete="off"
                    />
                  </label>
                  <CiFilter className="size-7 opacity-40" onClick={openPopUp} />
                </span>
              </div>
            </div>

            <div className="w-full h-full px-5">
              {isLoading ? (
                <div className="grid sm:grid-cols-1 grid-cols-2 2xl:grid-cols-3 gap-y-8 gap-x-5 pb-14">
                  {Array.from({ length: 15 }).map((_, index) => (
                    <EmployeeCardShimmer key={index} />
                  ))}
                </div>
              ) : filteredemployees.length > 0 ? (
                <div className="grid sm:grid-cols-1 grid-cols-2 2xl:grid-cols-3 gap-y-8 gap-x-5 pb-14">
                  {filteredemployees.map((employee) => (
                    <EmployeeCard
                      key={employee.id}
                      image={employee.employeeImage}
                      firstName={employee.firstName}
                      lastName={employee.lastName}
                      id={employee.employeeId}
                      department={employee.department}
                    />
                  ))}
                </div>
              ) : (
                <NodataFound />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full 2xl:w-[700px]  xl:h-[766px] 2xl:h-[924px] pb-5 md:hidden flex items-center justify-center py-9 ">
        <div
          className={` bg-white w-full rounded-lg overflow-y-auto overflow h-full snap-scroll shadow-sm border-solid border border-slate-100 shadow-gray-20 2xl:pb-10 xl:pb-28`}
        >
          <div className="sticky top-0 z-10 px-5 bg-white">
            <div className="font-semibold  text-base   custom-font-mavan-pro opactiy-80">
              <div className="flex flex-row gap-6 items-center  py-4 border-b border-black ">
                <div>Admins</div>
                <div onClick={openSettings} className="cursor-pointer">
                  <Add_Admin />
                </div>
              </div>
            </div>
          </div>
          <div className="relative px-5 py-4 ">
            {true ? (
              employees.length < 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2  md:mt-8 gap-y-8 ">
                  {employees.map(
                    (employee) =>
                      employee.admin && (
                        <AdminCard
                          key={employee.id}
                          name={employee.firstName}
                          empid={employee.employeeId}
                          department={employee.department}
                          empImg={employee.employeeImage}
                          admin={employee.admin}
                        />
                      )
                  )}
                </div>
              ) : (
                <div className="custom-font-mavan-pro text-3xl font-bold no-data-found-text">
                  No admin Added
                </div>
              )
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2  md:mt-8 gap-y-8">
                {Array.from({ length: 6 }).map((_, index) => (
                  <EmployeeCardShimmer key={index} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {popUp && (
        <BusinessunitPopup
          onClose={closePopUp}
          popupRef={popUpRef}
          handleApplyFiltersDashboard={handleApplyFiltersDashboard}
          isExiting={isExiting}
          units={units}
          departments={departments}
          setSelectedDepartment={setSelectedDepartment}
          setSelectedUnits={setSelectedUnits}
          selectedDepartment={selectedDepartment}
          selectedUnits={selectedUnits}
        />
      )}
      {popUpSettings && (
        <SettingsPopup
          isExiting={isExitingSettings}
          onClose={onCloseSettings}
          popUp={popUpSettings}
        />
      )}
    </div>
  );
}

export default Dashboard;
