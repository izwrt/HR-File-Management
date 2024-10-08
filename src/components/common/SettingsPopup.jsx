import React, { useRef, useEffect, useState } from "react";
import AdminCard from "../common/AdminCard";
import axios from "axios";

const SettingsPopup = ({ onClose }) => {
  const popupRef = useRef();
  const [activeTab, setActiveTab] = useState("Admin Privileges");
  const [adminUsers, setAdminUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");


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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };
  }, [onClose]);

  const handleToggle = (id) => {
    console.log("Toggled user with ID:", id);
  };

  const filteredUsers = adminUsers.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-30">
      <div
        ref={popupRef}
        className="homeBgColor p-6 rounded-md shadow-lg w-[800px] h-[600px] flex relative"
      >
        <div className="absolute top-0 left-0 w-full flex justify-between items-center p-4 pt-6 z-20 homeBgColor ">
          <h2 className="text-xl font-semibold pl-5 footer-font">Settings</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800 text-2xl pr-5"
          >
            &times;
          </button>
        </div>
        <div className="w-1/4 pt-16 pr-4">
          <div className="flex flex-col gap-2">
            <button
              className={` py-2 px-2 rounded-md text-left   homeFontColor custom-font-mavan-pro ${
                activeTab === "Admin Privileges"
                  ? "text-left selectedTab"
                  : " hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab("Admin Privileges")}
            >
              Admin Privileges
            </button>
            <button
              className={` py-2 px-2 rounded-md  text-left  homeFontColor custom-font-mavan-pro  ${
                activeTab === "Time Format"
                  ? " text-left selectedTab"
                  : " hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab("Time Format")}
            >
              Time Format
            </button>
          </div>
        </div>
        <div className="w-3/4 pl-6 pt-16 custom-font-mavan-pro  overflow-y-auto">
          {activeTab === "Admin Privileges" && (
            <div className="flex flex-col gap-10 ">
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="p-4 border rounded-md h-7 w-52"
              />
              {loading ? (
                <p>Loading...</p>
              ) : ( 
                <div className="flex flex-col gap-4">
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
          )}
          {activeTab === "Time Format" && (
            <div>
              <p className="text-gray-600">hihi</p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default SettingsPopup;
