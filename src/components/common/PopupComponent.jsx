import React, { useRef, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Close from "../../assets/images/close.png";
import NavContext,{NavContextProvide} from "../../utils/useContext/NavContext"

const PopupComponent = ({ heading = "Default Header", popNavs ,setPopUp}) => {

  const navigate = useNavigate();


  const handleBack = () => {
    setPopUp(false);
  };
  

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-30">
      <div className="homeBgColor rounded-lg shadow-lg w-[600px] h-[600px] flex flex-col relative overflow-y-scroll overflow">
        <div className="sticky top-0 w-full flex justify-between items-center px-6 pb-2 pt-6 z-20 border-b homeBgColor">
          <h2 className="text-lg font-semibold custom-font-mavan-pro opacity-70 footer-font">
            {heading}
          </h2>
        <button
          className="cursor-pointer w-5 h-fit rounded-full overflow-hidden transition-all ease-in-out  duration-300 hover:scale-90 hover:opacity-60 focus:bg-slate-200"
          onClick={handleBack}>
          <img src={Close} alt="" />
        </button>
        </div>
          <div className="px-6 pb-6">
          <div className="flex justify-between text-sm font-semibold w-full py-3">
          {popNavs.map((f) => (
            <NavLink
              to={f}
              key={f}
              className={({isActive}) => { return(isActive ? 'border-b-2 border-customBlue footer-font text-gray-500' : 'footer-font text-gray-500')}}
              activeclassname="active-link"
            >
              {f}
            </NavLink>
          ))}
        </div>
        <NavContextProvide>
          <Outlet/>
        </NavContextProvide>
            
          </div>
      </div>
    </div>
  );
};

export default PopupComponent;
