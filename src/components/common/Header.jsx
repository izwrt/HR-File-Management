import React, { useEffect, useState } from "react";
import axios from "axios";
import Logo from "../../assets/images/logo.jsx";
import Setting from "../../assets/images/setting.jsx";
import Bellicon from "../../assets/images/bellicon.jsx";
import { useLocation } from "react-router-dom";
import HomeLogo from "../../assets/images/HomeLogo.jsx";

const Header = () => {
  const [empImg, setEmpImg] = useState("N");

  const location  = useLocation();

  console.log(location.pathname);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("http://localhost:8000/employees");
        const employee = res?.data[0]?.empImg;
        setEmpImg(employee);
      } catch (error) {
        console.error("Error fetching employee data:", error);
      }
    })
    ();
  }, []);

  const handleNavigation = () => {
    window.location.href = "https://puginarug.com/";
  };

  return (
    <>
      <div className="bg-white  pr-2 shadow-md w-fullscreen flex items-center">
        <div className="bg-customBlue  w-60 h-16 flex items-center justify-start pl-5">
          <Logo />
        </div>
        <div className="flex gap-10 ml-auto  pr-4  items-center">
          {/* <button
            className="text-customBlue font-medium text-xl"
            onClick={handleNavigation}
          >
            Home
          </button>
          <button
            className="text-customBlue font-medium text-xl"
            onClick={handleNavigation}
          >
            Dashboard
          </button> */}
          <ul className="flex-1 gap-10  text-right">
            <li className="text-customBlue font-medium text-xl inline-block  ml-auto  pr-4 cursor-pointer">Home</li>
            <li className="text-customBlue font-medium text-xl inline-block gap-10 ml-auto  pr-4 cursor-pointer">Dashboard</li>
          </ul>

          <button onClick={handleNavigation}>
            <Setting />
          </button>
          <button onClick={handleNavigation}>
            <Bellicon />
          </button>

          <button onClick={handleNavigation}>
            {empImg && (
              // <div className=" h-1/2 ">
              //   <img
              //     className="h-full w-full rounded-full  "
              //     src={empImg}
              //     alt="Employee"
              //   />
              // </div>
              <div className=" h-10 w-10 md:h-14 md:w-14 overflow-hidden">
                <img
                  className="h-full w-full object-center object-cover rounded-full scale-150"
                  src={empImg}
                  alt="Employee"
                />
        </div>
    </nav>
  );
};

export default Header;
