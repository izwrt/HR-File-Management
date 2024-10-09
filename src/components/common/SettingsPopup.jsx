import React, { useRef, useState } from "react";
import Close from "../../assets/images/close.png";
import SettingAdminPrivileges from "./SettingAdminPrivileges";
import TimeFormatSettings from "./TimeFormatSettings";

const SettingsPopup = ({ onClose ,isExiting}) => {
  const [activeComponent, setActiveComponent] = useState("admin");

  const handleNavClick = (component) => {
    setActiveComponent(component);
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "admin":
        return <SettingAdminPrivileges />;
      case "timeFormat":
        return <TimeFormatSettings />;
    }
  };

  console.log(activeComponent)
  
  const popupRef = useRef();
  const popClose = (e) => {
    if (popupRef.current === e.target) {
      onClose();
    }
  };

  return (
    <div ref={popupRef}
    className={`bg-black fixed h-full w-full bg-opacity-30 top-0 z-50 left-0 right-0 flex justify-center items-center backdrop-blur-sm ${
      isExiting ? "popup" : "popup-exit"
    }`}
    onClick={popClose}>
      <div
        ref={popupRef}
        className="homeBgColor rounded-md shadow-lg w-[600px] h-[600px] flex flex-col relative  overflow-y-scroll overflow"
      >
        <div className="sticky top-0 bottom-0 w-full flex justify-between items-center px-6 pb-2 pt-6 z-20  bg-inherit border-b ">
          <h2 className="text-lg font-semibold custom-font-mavan-pro opacity-70 footer-font">
            Settings
          </h2>
          <button
          className="cursor-pointer w-5 h-fit rounded-full overflow-hidden transition-all ease-in-out  duration-300 hover:scale-90 hover:opacity-60 focus:bg-slate-200"
          onClick={()=> onClose()}
        >
          <img src={Close} alt="" />
        </button>
        </div>
        <div className=" flex px-6 py-3">
          <div className="w-[150px]">
            <ul className="flex fixed flex-col gap-2">
              <li
                className={
                  `rounded-lg text-left px-4 py-2 text-sm homeFontColor custom-font-mavan-pro cursor-pointer transition-colors duration-200 ease-in-out bg-selectedTab ${activeComponent === 'admin' ? "bg-opacity-100 " :"bg-opacity-0"}`
                }
                onClick={() => handleNavClick("admin")}
              >
                Admin Privileges
              </li>
              <li
                className={
                  `px-4 py-2 text-sm rounded-lg  text-left  homeFontColor custom-font-mavan-pro cursor-pointer transition-colors duration-200 ease-in-out bg-selectedTab  ${activeComponent === 'timeFormat' ? "bg-opacity-100" :"bg-opacity-0"}`
                }
                onClick={() => handleNavClick("timeFormat")}
              >
                Time Format
              </li>
            </ul>
          </div>
          {/* {cards container} */}
          {renderActiveComponent()}
        </div>
      </div>
    </div>
  );
};

export default SettingsPopup;
