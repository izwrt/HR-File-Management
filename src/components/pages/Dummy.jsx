import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import PopupComponent from "./PopupComponent";

const fruits = ["dummyone", "salary", "Banana", "Grapes"];

const Dummy = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [popupHeading, setPopupHeading] = useState("");
  const [popupProps, setPopupProps] = useState([]);

  const handleLinkClick = (fruit) => {
    setPopupHeading(`${fruit}`);
    if (fruit === "dummyone") {
      setPopupProps(["Certifications"]);
    } else if (fruit === "salary") {
      setPopupProps(["Salary Structure", "Email Screenshot"]);
    } else if (fruit === "Banana") {
      setPopupProps(["Banana Variety", "Banana Benefits"]);
    } else if (fruit === "Grapes") {
      setPopupProps(["Grape Types", "Grape Uses"]);
    }

    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className="mt-16 ml-[220px] 2xl:ml-[230px] md:ml-0 flex gap-10">
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

      {isPopupVisible && (
        <PopupComponent
          heading={popupHeading}
          onClose={closePopup}
          props={popupProps}
        />
      )}
    </div>
  );
};

export default Dummy;
