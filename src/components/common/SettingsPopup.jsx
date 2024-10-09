import React, { useRef, useEffect, useState } from "react";
import SettingAdminPrivileges from "./SettingAdminPrivileges";

const SettingsPopup = ({ onClose }) => {
  const popupRef = useRef();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-30">
      <div
        ref={popupRef}
        className="homeBgColor rounded-md shadow-lg w-[600px] h-[600px] flex flex-col relative  overflow-y-scroll overflow"
      >
        <div className="sticky top-0 bottom-0 w-full flex justify-between items-center px-6 pb-2 pt-6 z-20  bg-inherit border-b ">
          <h2 className="text-lg font-semibold custom-font-mavan-pro opacity-70 footer-font">
            Settings
          </h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800 text-2xl"
          >
            &times;
          </button>
        </div>
        <div className=" flex px-6 py-3">
          <div className="w-[150px]">
            <ul className="flex fixed flex-col gap-2">
              <li
                className={
                  "rounded-lg text-left px-4 py-2 text-sm homeFontColor custom-font-mavan-pro"
                }
              >
                Admin Privileges
              </li>
              <li
                className={
                  "px-4 py-2 text-sm rounded-lg  text-left  homeFontColor custom-font-mavan-pro"
                }
              >
                Time Format
              </li>
            </ul>
          </div>
          {/* {cards container} */}
          <SettingAdminPrivileges />
        </div>
      </div>
    </div>
  );
};

export default SettingsPopup;
