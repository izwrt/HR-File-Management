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
<<<<<<< HEAD
=======

  console.log(location.pathname);
>>>>>>> b5d85f41fca38ff83849d1552217b9a96055ef9b

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
<<<<<<< HEAD
    <nav className="w-fullscreen flex items-center pr-8">
      {location?.pathname != "/dashboard" ? (
=======
    <nav className="w-fullscreen flex items-center pr-8  shadow-lg bg-white">
      {location?.pathname != "/home" ? (
>>>>>>> b5d85f41fca38ff83849d1552217b9a96055ef9b
        <div className=" w-60 h-16 flex items-center justify-start pl-5 bg-black">
          <Logo />
        </div>
      ) : (
<<<<<<< HEAD
        <div className=" w-60 h-16 flex items-center justify-start pl-5 ">
          <HomeLogo />
        </div>
      )}

      <ul className="flex gap-10 ml-auto  pr-8   text-customBlue custom-font-mavan-pro  text-base">
=======
        <div className=" w-60 h-20 flex items-center justify-start pl-8 ">
          <HomeLogo />
        </div>
      )}
      <ul className="flex gap-10 ml-auto pr-8 text-customBlue custom-font-mavan-pro font-normal text-base">
>>>>>>> b5d85f41fca38ff83849d1552217b9a96055ef9b
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
