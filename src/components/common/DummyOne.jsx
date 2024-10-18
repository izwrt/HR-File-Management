import React, { useState } from "react";
import PopupComponent from "./PopupComponent";



const DummyOne = () => {

  const [isPopupVisible, setPopupVisible] = useState(true);

    const closePopup = () => {
    setPopupVisible(false);
  };

  const popupProps = ["Banana Variety", "Banana Benefits"]
  return (
    isPopupVisible && (
      <PopupComponent
        heading={"hghgh"}
        onClose={closePopup}
        props={popupProps}
      />
    )
  )
}

export default DummyOne
