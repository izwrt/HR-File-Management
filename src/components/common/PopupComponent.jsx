import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Close from "../../assets/images/close.png";
import Cloud from "../../assets/images/cloud-file.gif";
import NavContext from "../../utils/useContext/NavContext";

//task 1 : File need to we uploaded to bacnked.
//task 2 : File should be stored in state.
//task 3 : There should be multiple files need to uploaded at a time
//task 4 : Uploading multiple files at time in to the banked server
//task 5 : Correcting all api and re-assigning the new api fetch and push

const PopupComponent = ({
  heading = "Default Header",
  setPopUp,
  isExiting,
  findLocation,
  popNavs,
}) => {
  const { fileList, runAnimation, fileUploaded, setFileUploaded, filePracent } =
    useContext(NavContext);

  const handleNavigation = (e) => {
    if (fileList.length > 0) {
      alert("Cannot navigate while files are present!");
      e.preventDefault();
    }
  };

  const handleBack = (e) => {
    setPopUp(false);
  };

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-30 backdrop-blur-sm  ${
        isExiting ? "popup" : "popup-exit"
      }`}
    >
      <div className="homeBgColor rounded-lg shadow-lg w-[600px] h-[600px] flex flex-col relative overflow-y-scroll overflow">
        <div className="sticky top-0 w-full flex justify-between items-center px-6 pb-2 pt-6 z-20 border-b homeBgColor">
          <h2 className="text-lg font-semibold custom-font-mavan-pro opacity-70 footer-font">
            {heading}
          </h2>
          <button
            className="cursor-pointer w-5 h-fit rounded-full overflow-hidden transition-all ease-in-out  duration-300 hover:scale-90 hover:opacity-60 focus:bg-slate-200"
            onClick={handleBack}
          >
            <img src={Close} alt="" />
          </button>
        </div>
        <div className="px-6 pb-6 relative">
          <div className="flex gap-8 text-sm font-semibold w-full py-3">
            {popNavs.map((nav) => (
              <NavLink
                to={nav.navTo}
                state={nav}
                key={nav.fieldId}
                className={({ isActive }) => {
                  return isActive
                    ? "border-b-2 border-customBlue footer-font text-gray-500"
                    : "footer-font text-gray-500";
                }}
                onClick={(e) => {
                  handleNavigation(e);
                }}
              >
                {nav.navTo}
              </NavLink>
            ))}
          </div>
          {fileUploaded && (
            <div
              className={`custom-font-mavan-pro text-sm font p-2 font-medium text-customBlue bg-customBlue bg-opacity-20 file-uploaded slide-down `}
            >
              Files has been Uploaded
            </div>
          )}
          {filePracent && (
            <div className="absolute w-full top-10 custom-font-mavan-pro text-base font-medium text-red-600 text-opacity-70">
              No file is Added
            </div>
          )}

          {runAnimation && (
            <div className=" bg-white  absolute z-10 w-full h-[100%] top-0 left-0 flex justify-center items-center flex-col">
              <img className="bg-blend-overlay w-28" src={Cloud}></img>
            </div>
          )}

          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default PopupComponent;
