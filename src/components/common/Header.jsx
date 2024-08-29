import React from "react";
import Logo from "../../assets/images/logo.jsx";

const Header = () => {
  return (
    <>
      <div className="bg-white shadow-md w-screen h-16 flex items-center">
        <div className="bg-cyan-600 p-1 w-44 h-16 flex items-center justify-center ">
          <Logo />
        </div>
        <div className="font-semibold font-slate-500">Home</div>
      </div>
    </>
  );
};

export default Header;
