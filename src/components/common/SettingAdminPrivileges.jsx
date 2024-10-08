import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import { CiSearch } from "react-icons/ci";
import AdminCard from "../common/AdminCard";

const SettingAdminPrivileges = () => {
  const [loading, setLoading] = useState(true); // Set to true initially
  const [adminUsers, setAdminUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Move state here

  const filteredUsers = adminUsers.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const fetchAdminUsers = async () => {
      try {
        const response = await axios.get("http://localhost:8000/employees");
        setAdminUsers(response.data);
      } catch (error) {
        console.error("Error fetching admin users:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAdminUsers();
  }, []);

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
            value={searchTerm} // Make it a controlled input
            onChange={(e) => setSearchTerm(e.target.value)} // Update state on change
            className="w-full focus:outline-none textbox-color custom-font-mavan-pro opacity-80"
            placeholder="Search"
          />
        </label>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="flex flex-col gap-7">
            {filteredUsers.map((user) => (
              <AdminCard
                key={user.id}
                name={user.name}
                empId={user.empId}
                department={user.department}
                enabled={user.enabled}
                onToggle={() => handleToggle(user.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SettingAdminPrivileges;
