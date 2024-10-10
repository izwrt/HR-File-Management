import debounce from 'lodash.debounce';
import React, { useEffect, useMemo, useState } from "react";
import { CiSearch } from "react-icons/ci";
import apiFecthEmployees from "../../../api/apiFecthEmployees";
import AdminCard from "../common/AdminCard";

const SettingAdminPrivileges = () => {

  const [searchTerm, setSearchTerm] = useState(""); 

  const {adminUsers,employees} = apiFecthEmployees();




  const searchHandler = (e) => {
    setSearchTerm(e.target.value);
  }

  const filteredEmployees = employees
  .filter((emp) => emp.department === "HR" && (
    emp.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    emp.empid.includes(searchTerm)
  ))
  .sort((a, b) => (b.admin ? 1 : 0) - (a.admin ? 1 : 0));

  console.log("searched : ", filteredEmployees);

const searchDebounce = useMemo(() => debounce(searchHandler, 200), []);

useEffect(() => {
  return () => {
    searchDebounce.cancel();
  };
}, [searchDebounce]);


  return (
    <div className="w-3/4 pl-6 custom-font-mavan-pro">
      <div className="flex flex-col gap-4">
        <label
          htmlFor="search"
          className="border border-slate-200 flex w-[200px] self-end items-center rounded-lg p-[2px] px-[6px] gap-1.5 textbox-color"
        >
          <CiSearch className="size-5 stroke-1 h-fit opacity-40" />
          <input
            type="text"
            name="search"
            autoComplete="off"
            
            onChange={searchDebounce} 
            className="w-full focus:outline-none textbox-color custom-font-mavan-pro opacity-80"
            placeholder="Search"
          />
        </label>
        {adminUsers == null ? (
          <p>No Data Found</p>
        ) : adminUsers.length === 0 ? (<p>Loading</p>) :
        (
          <div className="flex flex-col gap-7 ">
            {filteredEmployees.map((user) => (
              <AdminCard
                key={user.empid}
                name={user.name}
                empid={user.empid}
                department={user.department}
                enabled={user.admin}
                empImg = {user.empImg}
              />
            ))}
          </div>
        )
        }
      </div>
    </div>
  );
};

export default SettingAdminPrivileges;
