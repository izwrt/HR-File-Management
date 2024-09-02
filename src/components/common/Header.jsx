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
    <nav className="w-fullscreen flex items-center pr-8">
        { location?.pathname !=  "/dashboard" ? 
             ( <div className=" w-60 h-16 flex items-center justify-start pl-5 bg-black">
              <Logo />
              </div>)
          : 
             ( <div className=" w-60 h-16 flex items-center justify-start pl-5 ">
              <HomeLogo />
              </div> )
        }


      <ul className="flex gap-10 ml-auto  pr-8   text-customBlue custom-font-mavan-pro  text-base">
        <li>Home</li>
        <li>Dashboard</li>
        <Setting />
        <Bellicon />
      </ul>
      <div className=" h-12 w-12 overflow-hidden bg-black rounded-full border-2 ">
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