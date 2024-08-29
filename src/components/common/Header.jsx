import React from "react";
import Logo from "../../assets/images/logo.jsx";
import Setting from "../../assets/images/setting.jsx";
import Reminder from "../../assets/images/reminder.jsx";

const Header = () => {
  return (
    <>
      <div className="bg-white shadow-md w-screen h-16 flex items-center">
        <div className="bg-cyan-600 p-1 w-44 h-16 flex items-center justify-center ">
          <Logo />
        </div>
        <div className=" bg-orange-200  flex flex-row gap-4 ">
          <div className="font-semibold font-slate-500">Home</div>
          <div className="font-semibold font-slate-500">Dashboard</div>
          <Setting />
          {/* <Reminder /> */}
        </div>
      </div>
    </>
  );
};

export default Header;
