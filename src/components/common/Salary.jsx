import React, { useState } from "react";
import PopupComponent from "../pages/PopupComponent";

const Salary = () => {
  const [isPopupVisible, setPopupVisible] = useState(true);

  const closePopup = () => {
    setPopupVisible(false);
  };

  const popupProps = [
    "Month one",
    "Month two",
    "Month three",
    "Form 16",
    "Bank Statement",
  ];
  return (
    isPopupVisible && (
      <PopupComponent
        heading={"jgfvc"}
        onClose={closePopup}
        props={popupProps}
      />
    )
  );
};

export default Salary;
