import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const fruits = ["dummyone", "salary", "Banana", "Grapes"];

const Dummy = () => {

  const closePopup = () => {
    setPopupVisible(false);
  };
  
  return (
    <div className="mt-16 ml-[220px] 2xl:ml-[230px] md:ml-0 flex gap-10 ">
      {fruits.map((f) => (
        <NavLink
          to={f}
          className="fruit-link"
          activeClassName="active"
          onClick={() => handleLinkClick(f)}
          key={f}
        >
          {f}
        </NavLink>
      ))}

      <Outlet />
    </div>
  );
};

export default Dummy;
