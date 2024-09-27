



/////////////////////////////////////////////////////////DUMMY POPUP////////////////////////////////////////////




// import React, { useRef, useEffect } from "react";

// const SettingsPopup = ({ onClose }) => {
//   const popupRef = useRef();

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (popupRef.current && !popupRef.current.contains(event.target)) {
//         onClose();
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [onClose]);

//   return (
//     <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-30">
//       <div ref={popupRef} className="bg-white p-6 rounded-md shadow-lg w-[300px]">
//         <h2 className="text-xl font-semibold mb-4">Settings</h2>
//         <p>Your settings content goes here.</p>
//         <button
//           onClick={onClose}
//           className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         >
//           X
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SettingsPopup;





///////////////////////////////////////////////NO PROPER FORMAT/////////////////////////////////////////////////





// import React, { useRef, useEffect, useState } from "react";

// const SettingsPopup = ({ onClose }) => {
//   const popupRef = useRef();
//   const [activeTab, setActiveTab] = useState("Admin Privileges");

//   const users = [
//     { id: 1, name: "Shreya Raj", empId: "479", department: "HR Department", enabled: true },
//     { id: 2, name: "Shweta Johi", empId: "197", department: "HR Department", enabled: false },
//     { id: 3, name: "Dilip Kumar", empId: "149", department: "HR Department", enabled: true },
//     { id: 4, name: "Tara Shetty", empId: "1035", department: "HR Department", enabled: false },
//   ];

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (popupRef.current && !popupRef.current.contains(event.target)) {
//         onClose();
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [onClose]);

//   const handleToggle = (id) => {
//     // This can be connected to your backend to save the toggle state
//     const updatedUsers = users.map(user => 
//       user.id === id ? { ...user, enabled: !user.enabled } : user
//     );
//     // Assuming you're updating the state to reflect the changes in toggles
//     console.log("Updated Users:", updatedUsers);
//   };

//   return (
//     <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-30">
//       <div ref={popupRef} className="bg-white p-6 rounded-md shadow-lg w-[600px]">
//         <div className="flex justify-between items-center pb-4 border-b border-gray-200">
//           <h2 className="text-xl font-semibold">Settings</h2>
//           <button onClick={onClose} className="text-gray-500 hover:text-gray-700">&times;</button>
//         </div>

//         {/* Tabs */}
//         <div className="flex gap-4 mt-4">
//           <button 
//             className={`py-2 ${activeTab === "Admin Privileges" ? "border-b-2 border-blue-500 font-semibold" : "text-gray-500"}`} 
//             onClick={() => setActiveTab("Admin Privileges")}
//           >
//             Admin Privileges
//           </button>
//           <button 
//             className={`py-2 ${activeTab === "Time Format" ? "border-b-2 border-blue-500 font-semibold" : "text-gray-500"}`} 
//             onClick={() => setActiveTab("Time Format")}
//           >
//             Time Format
//           </button>
//         </div>

//         {/* Content based on the active tab */}
//         <div className="mt-4">
//           {activeTab === "Admin Privileges" && (
//             <>
//               <div className="flex justify-between items-center mb-2">
//                 <input
//                   type="text"
//                   className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
//                   placeholder="Search"
//                 />
//               </div>

//               <div className="flex flex-col gap-3 mt-4">
//                 {users.map((user) => (
//                   <div key={user.id} className="flex justify-between items-center p-3 border rounded">
//                     <div>
//                       <p className="font-medium">{user.name}</p>
//                       <p className="text-sm text-gray-500">{user.empId} | {user.department}</p>
//                     </div>
//                     <label className="relative inline-flex items-center cursor-pointer">
//                       <input 
//                         type="checkbox" 
//                         className="sr-only peer" 
//                         checked={user.enabled} 
//                         onChange={() => handleToggle(user.id)} 
//                       />
//                       <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
//                     </label>
//                   </div>
//                 ))}
//               </div>
//             </>
//           )}

//           {activeTab === "Time Format" && (
//             <div>
//               <p className="text-gray-600">Time Format settings go here.</p>
//               {/* Add more content as needed */}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SettingsPopup;

// SettingsPopup.js




////////////////////////////////////////////////////CARDS ARE PROPER////////////////////////////////////////////




// import React, { useRef, useEffect, useState } from "react";
// import AdminCard from "../common/AdminCard"; // Adjust the import path as per your project structure

// const SettingsPopup = ({ onClose }) => {
//   const popupRef = useRef();
//   const [activeTab, setActiveTab] = useState("Admin Privileges");

//   // Sample data for admin privileges (replace with your actual data if needed)
//   const adminUsers = [
//     { id: 1, name: "Shreya Raj", empId: "479", department: "HR Department", enabled: true },
//     { id: 2, name: "Shweta Johi", empId: "197", department: "HR Department", enabled: false },
//     { id: 3, name: "Dilip Kumar", empId: "149", department: "HR Department", enabled: true },
//     { id: 4, name: "Tara Shetty", empId: "1035", department: "HR Department", enabled: false },
//   ];

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (popupRef.current && !popupRef.current.contains(event.target)) {
//         onClose();
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [onClose]);

//   const handleToggle = (id) => {
//     // Add logic to handle toggling, like updating the state or making an API call
//     console.log("Toggled user with ID:", id);
//   };

//   return (
//     <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-30">
//       <div ref={popupRef} className="bg-white p-6 rounded-md shadow-lg w-[600px]">
//         <div className="flex justify-between items-center pb-4 border-b border-gray-200">
//           <h2 className="text-xl font-semibold">Settings</h2>
//           <button onClick={onClose} className="text-gray-500 hover:text-gray-700">&times;</button>
//         </div>

//         {/* Tabs */}
//         <div className="flex gap-4 mt-4">
//           <button
//             className={`py-2 ${activeTab === "Admin Privileges" ? "border-b-2 border-blue-500 font-semibold" : "text-gray-500"}`}
//             onClick={() => setActiveTab("Admin Privileges")}
//           >
//             Admin Privileges
//           </button>
//           <button
//             className={`py-2 ${activeTab === "Time Format" ? "border-b-2 border-blue-500 font-semibold" : "text-gray-500"}`}
//             onClick={() => setActiveTab("Time Format")}
//           >
//             Time Format
//           </button>
//         </div>

//         {/* Content based on the active tab */}
//         <div className="mt-4">
//           {activeTab === "Admin Privileges" && (
//             <div className="flex flex-col gap-3 mt-4">
//               {/* Use the AdminCard component here */}
//               {adminUsers.map((user) => (
//                 <AdminCard
//                   key={user.id}
//                   name={user.name}
//                   empId={user.empId}
//                   department={user.department}
//                   enabled={user.enabled}
//                   onToggle={() => handleToggle(user.id)} // Assuming AdminCard has an onToggle prop
//                 />
//               ))}
//             </div>
//           )}

//           {activeTab === "Time Format" && (
//             <div>
//               <p className="text-gray-600">Time Format settings go here.</p>
//               {/* Add more content as needed */}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SettingsPopup;




///////////////////////////////////////////////////////SEARCH BAR IS NOT THERE//////////////////////////////////




import React, { useRef, useEffect, useState } from "react";
import AdminCard from "../common/AdminCard"; // Adjust the import path as per your project structure

const SettingsPopup = ({ onClose }) => {
  const popupRef = useRef();
  const [activeTab, setActiveTab] = useState("Admin Privileges");

  // Sample data for admin privileges (replace with your actual data if needed)
  const adminUsers = [
    { id: 1, name: "Shreya Raj", empId: "479", department: "HR Department", enabled: true },
    { id: 2, name: "Shweta Johi", empId: "197", department: "HR Department", enabled: false },
    { id: 3, name: "Dilip Kumar", empId: "149", department: "HR Department", enabled: true },
    { id: 4, name: "Tara Shetty", empId: "1035", department: "HR Department", enabled: false },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleToggle = (id) => {
    // Add logic to handle toggling, like updating the state or making an API call
    console.log("Toggled user with ID:", id);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-30">
      <div ref={popupRef} className="bg-white p-6 rounded-md shadow-lg w-[700px] flex">
        <div className="flex flex-col gap-4 w-1/4 pr-4 border-r border-gray-200">
          <h2 className="text-xl font-semibold mb-2">Settings</h2>

          {/* Tabs on the left side */}
          <button
            className={`text-left py-2 px-2 rounded-md ${activeTab === "Admin Privileges" ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-gray-100"}`}
            onClick={() => setActiveTab("Admin Privileges")}
          >
            Admin Privileges
          </button>
          <button
            className={`text-left py-2 px-2 rounded-md ${activeTab === "Time Format" ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-gray-100"}`}
            onClick={() => setActiveTab("Time Format")}
          >
            Time Format
          </button>
        </div>

        {/* Content area on the right side */}
        <div className="flex-1 pl-4">
          <div className="flex justify-between items-center pb-4 border-b border-gray-200">
            <span className="text-lg font-medium">{activeTab}</span>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">&times;</button>
          </div>

          {/* Content based on the active tab */}
          <div className="mt-4">
            {activeTab === "Admin Privileges" && (
              <div className="flex flex-col gap-3 mt-4">
                {/* Use the AdminCard component here */}
                {adminUsers.map((user) => (
                  <AdminCard
                    key={user.id}
                    name={user.name}
                    empId={user.empId}
                    department={user.department}
                    enabled={user.enabled}
                    onToggle={() => handleToggle(user.id)} // Assuming AdminCard has an onToggle prop
                  />
                ))}
              </div>
            )}

            {activeTab === "Time Format" && (
              <div>
                <p className="text-gray-600">Time Format settings go here.</p>
                {/* Add more content as needed */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPopup;
