import axios from "axios";
import React, { useEffect, useState } from "react";
import Bellicon from "../../assets/images/bellicon.jsx";

const Header = () => {
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

  return (
    <nav className="h-16 w-full flex items-center justify-end bg-white gap-[60%] pr-5 p-2 nav-container">
      <div className="flex items-center justify-left gap-8" >
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
