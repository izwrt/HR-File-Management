import React, { useRef, useEffect, useState } from "react";
import AdminCard from "../common/AdminCard";
import axios from "axios";

const SettingsPopup = ({ onClose }) => {
  const popupRef = useRef();
  const [activeTab, setActiveTab] = useState("Admin Privileges");
  const [adminUsers, setAdminUsers] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-30">
      <div
        ref={popupRef}
        className="bg-white p-6 rounded-md shadow-lg w-[800px] h-[600px] flex relative"
      >
        <div className="w-1/4 pr-4">
          <div className="flex flex-row gap-4 p-11 mt-4">
            <h2 className="text-xl font-semibold pb-4 footer-font">Setting</h2>
            <button
              onClick={onClose}
              className="absolute top-4 right-4  hover:text-gray-700 "
            >
              X
            </button>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <button
              className={`text-left py-2 px-2 rounded-md custom-font-mavan-pro ${
                activeTab === "Admin Privileges"
                  ? "  text-gray-700 selectedTab"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab("Admin Privileges")}
            >
              Admin Privileges
            </button>
            <button
              className={`text-left py-2 px-2 rounded-md custom-font-mavan-pro  ${
                activeTab === "Time Format"
                  ? "  text-gray-700 selectedTab "
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab("Time Format")}
            >
              Time Format
            </button>
          </div>
        </div>
        <div className="w-3/4 pl-6 overflow-y-auto">
          {activeTab === "Admin Privileges" && (
            <div className="flex flex-col gap-3">
              {loading ? (
                <p>Loading...</p>
              ) : (
                adminUsers.map((user) => (
                  <AdminCard
                    key={user.id}
                    name={user.name}
                    empId={user.empId}
                    department={user.department}
                    enabled={user.enabled}
                    onToggle={() => handleToggle(user.id)}
                  />
                ))
              )}
            </div>
          )}

          {activeTab === "Time Format" && (
            <div>
              <p className="text-gray-600 ">Time Format settings go here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SettingsPopup;
