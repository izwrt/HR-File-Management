import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Bellicon from "../../assets/images/bellicon.jsx";
import HomeLogo from "../../assets/images/HomeLogo.jsx";
import Logo from "../../assets/images/logo.jsx";
import Setting from "../../assets/images/setting.jsx";

const Header = () => {
  const [empImg, setEmpImg] = useState("N");

  const location = useLocation();

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

  return (
    <nav className="w-fullscreen flex items-center justify-center bg-white gap-[60%] px-10 nav-container">
      {location?.pathname === "/home" ? (
        <div className=" w-60 h-16 flex items-center">
          <HomeLogo />
        </div>
      ) : (
        <div className=" w-60 h-16 flex items-center bg-black">
          <Logo />
        </div>
      )}

      <div className="flex items-center justify-center gap-8">
        <ul className="text-black custom-font-mavan-pro font-medium text-[16px] flex items-center justify-center gap-8">
                  <li className="nav-hover" >Home</li>
                  <li className="nav-hover">Dashboard</li>
                  <li className="nav-hover">Settings</li>
                  <Bellicon />    
        </ul>
        <div className=" h-12 w-12 overflow-hidden rounded-full border-[1.5px]  transition ease-out delay-100 hover:scale-105 cursor-pointer">
          <img
            className="h-full w-full object-center object-cover rounded-full"
            src={empImg}
            alt="Employee"
          />
        </div>

      </div>
    </nav>
  );
};

export default Header;
