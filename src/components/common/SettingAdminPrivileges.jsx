import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import apiFecthEmployees from "../../../api/apiFecthEmployees";
import AdminCard from "../common/AdminCard";

const SettingAdminPrivileges = () => {

  const [searchTerm, setSearchTerm] = useState(""); 

  const {adminUsers} = apiFecthEmployees();
  const {employees} = apiFecthEmployees();

  console.log(employees[1]);
  console.log(adminUsers)

  const handleToggle = (id) => {
    // Define what happens when toggling admin privileges
    console.log(`Toggled user with id: ${id}`);
  };

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
            value={searchTerm} // Make it a controlled input
            onChange={(e) => setSearchTerm(e.target.value)} // Update state on change
            className="w-full focus:outline-none textbox-color custom-font-mavan-pro opacity-80"
            placeholder="Search"
          />
        </label>
        {adminUsers == null ? (
          <p>No Data Found</p>
        ) : adminUsers.length === 0 ? (<p>Loading</p>) :
        (
          <div className="flex flex-col gap-7 ">
            {employees.map((user) => (
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
