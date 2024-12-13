// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import Bellicon from "../../assets/images/bellicon.jsx";
// import HomeLogo from "../../assets/images/HomeLogo.jsx";
// import { RxHamburgerMenu } from "react-icons/rx";

// const Header = ({openMenu,setOpenMenu,menuOpen}) => {
//   const [empImg, setEmpImg] = useState("N");

//   useEffect(() => {
//     (async () => {
//       try {
//         const res = await axios.get("http://localhost:8000/employees");
//         const employee = res?.data[0]?.empImg;
//         setEmpImg(employee);
//       } catch (error) {
//         console.error("Error fetching employee data:", error);
//       }
//     })();
//   }, []);

//   const handleNavigation = () => {
//     window.location.href = "https://puginarug.com/";
//   };

//   return (
//     <nav className="h-16 w-full flex items-center justify-end bg-white gap-[60%] pr-5 p-2 md:p-5 nav-container fixed z-20 ">

//       <div className="flex items-center w-full justify-between" >
//         <div className="flex justify-center items-center gap-4">
//           <RxHamburgerMenu size={25} className="opacity-70 md:opacity-70" onClick={menuOpen}/>
//         </div>
//         <div className="flex items-center  gap-8 ">
//           <ul className="text-black custom-font-mavan-pro font-sm text-[16px] text-opacity-70 flex items-center justify-center gap-8">
//           <li className="nav-hover" >Home</li>
//           <li className="nav-hover">Dashboard</li>
//           <li className="nav-hover" onClick={handlePopupToggle}> Settings</li>
//           <Bellicon />
//           </ul>
//           <div className=" h-12 w-12 overflow-hidden rounded-full border-[1.5px]  transition ease-out delay-100 hover:scale-105 cursor-pointer">
//           <img
//             className="h-full w-full object-center object-cover rounded-full"
//             src={empImg}
//             alt="Employee"
//           />
//           </div>
//         </div>

//       </div>
//     </nav>
//   );
// };

// export default Header;
// ------------------------------------------------------------------------------------------------

import axios from "axios";
import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Bellicon from "../../assets/images/bellicon.jsx";
import SettingsPopup from "./SettingsPopup";
import { NavLink } from "react-router-dom";
import apiFecthEmployees from "../../../api/apiFecthEmployees";
import BlueButton from "./BlueButton.jsx";

const Header = ({ openMenu, setOpenMenu, menuOpen, location }) => {
  const { employees, shimmerState } = apiFecthEmployees();
  const [isExiting, setIsExiting] = useState(false);
  const [popUp, setPopUp] = useState(false);

  const [empImg, setEmpImg] = useState("N");

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("http://localhost:8000/employees");
        const employee = res?.data[0]?.empImg;
        setEmpImg(employee);
      } catch (error) {
        console.error("Error fetching employee data:", error);
      }
    })();
  }, []);

  const handleNavigation = () => {
    window.location.href = "https://puginarug.com/";
  };

  const onOpen = () => {
    setPopUp(true);
    setIsExiting(true);
  };

  const onClose = () => {
    setTimeout(() => {
      setPopUp(false);
    }, 300);
    setIsExiting(false);
  };

  const { pathname } = location;

  return (
    <nav className="h-16 w-full flex items-center justify-end bg-white gap-[60%] pr-5 p-2 md:p-5 nav-container fixed z-20">
      <div className="flex items-center w-full justify-between">
        <div className="flex justify-center items-center gap-4">
          {pathname !== "/" && (
            <RxHamburgerMenu
              size={25}
              className="opacity-70 md:opacity-70"
              onClick={menuOpen}
            />
          )}
        </div>
        <div className="flex items-center gap-8 ">
          <ul className="text-black custom-font-mavan-pro font-sm text-[16px] flex items-center justify-center gap-8">
            <NavLink to="/">
              <li className="nav-hover">Home</li>
            </NavLink>
            <NavLink to="/dashboard">
              <li className="nav-hover">Dashboard</li>
            </NavLink>
            <li className="nav-hover" onClick={onOpen}>
              Settings
            </li>
            <NavLink to="/notifications">
              <div className="group flex justify-center">
                <Bellicon className="tooltip" />
                <span class="absolute top-[65px] bg-white shadow-2xl w-[400px] h-0 group-hover:h-[500px] text-xs text-black overflow-y-auto overflow scroll-smooth scroll-padding right-[23px] duration-500 ease-in-out">
                  <div className="">
                    <div className="px-5 py-4 flex flex-row items-center justify-between">
                      <div className="text-base font-bold">Notifications</div>
                      <button className="text-blue-500 hover:underline text-sm">
                        {" "}
                        Mark all as read
                      </button>
                    </div>
                    <div className="h-[1px] bg-gray-200 w-full"></div>

                    <div className="flex flex-col pt-2">
                      <div className=" flex flex-col gap-2">
                        {employees.map((employee) => {
                          return (
                            <>
                              <div className="flex flex-row items-center justify-between">
                                <div className="flex flex-row gap-4 justify-start items-center py-3 px-5">
                                  <img
                                    src={employee.empImg}
                                    className="h-[45px] w-[45px] rounded-full"
                                  ></img>
                                  <div className="font-semibold">
                                    {employee.name}
                                    <span className="font-normal">
                                      {" "}
                                      yet to submit
                                    </span>
                                    <div className="text-blue-500">
                                      Aadhar Card
                                    </div>
                                  </div>
                                </div>
                                <div className="font-extralight text-gray-500 pr-5">
                                  2 min ago
                                </div>
                              </div>

                              <div className="h-[1px] bg-gray-200 w-full"></div>
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </span>
              </div>
            </NavLink>
          </ul>
          <div className="h-12 w-12 overflow-hidden rounded-full border-[1.5px] transition ease-out delay-100 hover:scale-105 cursor-pointer">
            <img
              className="h-full w-full object-center object-cover rounded-full"
              src={empImg}
              alt="Employee"
            />
          </div>
        </div>
      </div>
      {popUp && (
        <SettingsPopup onClose={onClose} isExiting={isExiting} popUp={popUp} />
      )}
    </nav>
  );
};

export default Header;
