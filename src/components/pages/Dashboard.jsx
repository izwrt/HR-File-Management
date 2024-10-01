import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import CountContainer from "../common/CountContainer";
import debounce from "lodash.debounce";
import EmployeeCard from "../common/EmployeeCard";
import axios from "axios";
import AdminCard from "../common/AdminCard";
import apiFecthEmployees from "../../../api/apiFecthEmployees";
import { CiSearch } from "react-icons/ci";
import { CiFilter, CiSearch } from "react-icons/ci";
import NodataFound from "../common/NodataFound";
import BusinessunitPopup from "../common/BusinessunitPopup";

function Dashboard() {
  const employeeDetails = apiFecthEmployees();
  const [searchEmployee, setSearchEmployee] = useState("");
  const [selectedUnits, setSelectedUnits] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState([]);
  const [isExiting, setIsExiting] = useState(false);
  const [popUp, setPopUp] = useState(false);
  const popUpRef = useRef(null);
  const units = ["Invenger Technologies", "Invenger Solutions", "Instarack"];
  const departments = ["HR", "Finance", "IT"];

  const openPopUp = () => {
    setPopUp(true);
    setIsExiting(true);
  };

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
    setSearchEmployee(e.target.value);
  };

  const debouncedHandleChange = useMemo(() => {
    return debounce(handleChange, 300);
  }, []);

  const filteredEmployeeDetails = useMemo(() => {
    return employeeDetails.filter((emp) => {
      const searchMatch =
        searchEmployee === "" ||
        emp.name.toLowerCase().includes(searchEmployee.toLowerCase()) ||
        emp.empid.toString().includes(searchEmployee);

      const unitMatch =
        selectedUnits.length === 0 || selectedUnits.includes(emp.unit);
      const departmentMatch =
        selectedDepartment.length === 0 ||
        selectedDepartment.includes(emp.department);

      return searchMatch && unitMatch && departmentMatch;
    });
  }, [employeeDetails, searchEmployee, selectedUnits, selectedDepartment]);

  return (
    <div className="flex flex-col pr-12 mt-16 ml-[220px] 2xl:ml-[230px] md:ml-0 ">
      <div className="flex flex-row md:flex-col gap-8 2xl:gap-20 max-h-[800px] 2xl:max-h-[970px] mb-10">
        <div className="flex flex-col w-[70%] 2xl:w-[80%]">
          <div className="p-9 pl-8 flex 2xl:h-[220px] justify-between">
            <CountContainer
              smallText={`Active Employees`}
              largeNumber={`999`}
            />
            <CountContainer
              smallText={`Inactive Employees`}
              largeNumber={`999`}
            />
          </div>
          <div className=" px-7 ml-8 mr-8 bg-white shadow-lg rounded-lg md:h-32 h-[800px] 2xl:h-[970px] overflow-auto overflow scroll-smooth">
            <div className="bg-gray-50 backdrop-blur-sm bg-opacity-30 z-15 sticky top-0 rounded-lg">
              <div className="flex items-center justify-between flex-grow">
                <div className="font-bold mb-4 pt-4 text-xl">Employees</div>
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
                  <CiFilter className="size-7 opacity-40" onClick={openPopUp} />
                </span>
              </div>
            </div>

            <div className="grid mt-8 sm:grid-cols-1 grid-cols-2 2xl:grid-cols-3 gap-x-10 2xl:gap-x-12 gap-y-4 ">
              {filteredEmployeeDetails.length !== 0 ? (
                filteredEmployeeDetails.map((employee) => (
                  <EmployeeCard
                    key={employee.id}
                    image={employee.image}
                    name={employee.name}
                    id={employee.id}
                    department={employee.department}
                  />
                ))
              ) : (
                <div className="flex items-center justify-center min-w-[700px] min-h-[400px] 2xl:min-w-[1167px] 2xl:min-h-[600px] ">
                  <NodataFound />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className=" mr-6 mt-8 bg-white shadow-lg w-[35%] 2xl:w-[30%] sm:w-[30%] rounded-lg overflow-auto overflow scroll-smooth">
          <div className="sticky top-0 z-10 bg-green-50 backdrop-blur-sm bg-opacity-10">
            <div className="font-bold ml-4 text-lg pr-[308px] 2xl:pr-[393px] pt-4">
              Admins
            </div>
            <div className="ml-4 mt-2 absolute w-11/12 border-b-2 border-black"></div>
          </div>
          <div className="relative">
            <div className="flex flex-col ml-4 mt-8 gap-4">
              <AdminCard />
              <AdminCard />
              <AdminCard />
              <AdminCard />
              <AdminCard />
              <AdminCard />
              <AdminCard />
              <AdminCard />
              <AdminCard />
              <AdminCard />
            </div>
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
        />
      )}
    </div>
  );
}

export default Dashboard;
