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

import axios from "axios";
import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Bellicon from "../../assets/images/bellicon.jsx";
import SettingsPopup from "./SettingsPopup";

const Header = ({ openMenu, setOpenMenu, menuOpen }) => {

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

  return (
    <nav className="h-16 w-full flex items-center justify-end bg-white gap-[60%] pr-5 p-2 md:p-5 nav-container fixed z-20">
      <div className="flex items-center w-full justify-between">
        <div className="flex justify-center items-center gap-4">

          <RxHamburgerMenu
            size={25}
            className="opacity-70 md:opacity-70"
            onClick={menuOpen}
          />
        </div>
        <div className="flex items-center gap-8 ">
          <ul className="text-black custom-font-mavan-pro font-sm text-[16px] flex items-center justify-center gap-8">
            <li className="nav-hover">Home</li>
            <li className="nav-hover">Dashboard</li>
            <li className="nav-hover" onClick={onOpen}>
              Settings
            </li>
            <Bellicon />
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
      {popUp && <SettingsPopup onClose={onClose} isExiting={isExiting} popUp={popUp}/>}
    </nav>
  );
};

export default Header;
