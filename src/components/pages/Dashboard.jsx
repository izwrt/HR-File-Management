import React, { useCallback, useEffect, useMemo, useState } from "react";
import MainDashboardCard from "../common/MainDashboardCard";
import debounce from "lodash.debounce";
import EmployeeCard from "../common/EmployeeCard";
import axios from "axios";
import AdminCard from "../common/AdminCard";
import { CiSearch } from "react-icons/ci";

function Dashboard() {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = useCallback(
    debounce((term) => {
      setSearchTerm(term);
    }, 100),
    []
  );

  const filteredE = useMemo(() => {
    return employees.filter(
      (employee) =>
        employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.id.toString().includes(searchTerm)
    );
    0;
  }, [employees, searchTerm]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/employees")
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error(
          `There was a error fetching the employees and the error is ${error}`
        );
      });
  }, [employees]);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <div className="flex flex-col w-[65%]">
          <div className="m-6 flex sm:flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2 lg:w-[50%]">
              <MainDashboardCard />
            </div>
            <div className="w-full md:w-1/2 lg:w-[50%]">
              <MainDashboardCard />
            </div>
          </div>
          <div className="p-6 ml-6 mr-6 bg-white shadow-lg rounded-lg h-[calc(100vh-21rem)] overflow-auto">
            <div className="flex items-center justify-between">
              <div className="font-bold mb-4 text-xl">Employees</div>
              <label className="flex space-x-4 mb-6 relative">
                <CiSearch className="absolute left-6 top-3.5" />
                <input
                  type="text"
                  placeholder="search"
                  className="p-2 pl-8 rounded-lg border border-x-gray-300"
                  value={searchTerm}
                  onChange={(e) => handleSearchChange(e.target.value)}
                />
              </label>
            </div>
            <div className=" grid sm:grid-cols-1 grid-cols-2 gap-x-28 gap-y-4">
              {filteredE.map((employee) => (
                <EmployeeCard
                  key={employee.id}
                  image={employee.image}
                  name={employee.name}
                  id={employee.id}
                  department={employee.department}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-6 mr-6 bg-white shadow-lg w-[35%] sm:w-[10%] rounded-lg">
          <div className="relative">
            <div className="font-bold ml-4 mt-10 text-lg">Admins</div>
            <div className="ml-4 mt-2 absolute w-11/12 border-b-2 border-black"></div>
            <div className="flex flex-col ml-4 mt-10 gap-4">
              <AdminCard />
              <AdminCard />
              <AdminCard />
              <AdminCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
