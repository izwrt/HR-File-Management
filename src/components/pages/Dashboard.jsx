import debounce from "lodash.debounce";
import React, {
  useMemo,
  useRef,
  useState
} from "react";
import { CiFilter, CiSearch } from "react-icons/ci";
import apiFecthEmployees from "../../../api/apiFecthEmployees";
import Add_Admin from "../../assets/images/Add_Admin";
import AdminCard from "../common/AdminCard";
import BusinessunitPopup from "../common/BusinessunitPopup";
import CountContainer from "../common/CountContainer";
import EmployeeCard from "../common/EmployeeCard";
import NodataFound from "../common/NodataFound";

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
    <div className="flex flex-row relative mt-16 ml-[220px] 2xl:ml-[230px] md:ml-0 h-fit pl-8 pr-12 md:pl-5 md:pr-6 gap-8">
      <div className="flex flex-col md:w-full w-[70%] 2xl:w-full 2xl:h-full ">
        <div className="grid grid-flow-col justify-between md:grid-rows-1 gap-10 py-9">
          <CountContainer smallText={`Active Employees`} largeNumber={`999`} />
          <CountContainer
            smallText={`Inactive Employees`}
            largeNumber={`999`}
          />
        </div>
        <div className="xl:h-[35rem] 2xl:h-[44rem] pb-5 md:h-[900px]  w-full ">
          <div className="bg-white rounded-lg  flex flex-col gap-3 h-full shadow-sm border-solid border border-slate-100 shadow-gray-200 overflow-y-auto overflow scroll-smooth w-full scroll-padding">
            <div className="bg-white backdrop-blur-sm  z-10 sticky top-0 rounded-lg">
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
                      onChange={debouncedHandleChange}
                    />
                  </label>
                  <CiFilter className="size-7 opacity-40" onClick={openPopUp} />
                </span>
              </div>
            </div>

            <div className="w-full h-full px-5 ">
              {filteredEmployeeDetails.length !== 0 ? (
                <div className=" grid sm:grid-cols-1 grid-cols-2 2xl:grid-cols-3 gap-5 pb-5">
                  {filteredEmployeeDetails.map((employee) => (
                    <EmployeeCard
                      key={employee.id}
                      image={employee.image}
                      name={employee.name}
                      id={employee.id}
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
      <div className=" w-[700px]  xl:h-[766px] 2xl:h-[924px] pb-5 md:hidden flex items-center justify-center py-9 ">
        <div className=" bg-white w-full rounded-lg overflow-y-auto  overflow snap-scroll h-full shadow-sm border-solid border border-slate-100 shadow-gray-20 pb-5 xl:pb-14">
          <div className="sticky top-0 z-10 px-5 bg-white">
            <div className="font-semibold  text-base   custom-font-mavan-pro opactiy-80">
              <div className="flex flex-row gap-6 items-center  py-4 border-b border-black ">
                <div>Admins</div>
                <Add_Admin />
              </div>
            </div>
          </div>
          <div className="relative px-5 py-4 bg-red-400 ">
            <div className="grid grid-cols-1 md:grid-cols-2  md:mt-8 gap-4">
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
