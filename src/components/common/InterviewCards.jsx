import React from "react";
import Education from "../../assets/images/Education";

const InterviewCards = ({
  heading = "Default Header",
  onClose,
  props,
  image,
}) => {
  return (
    <div className="card-color h-fit p-2 ">
      <div className="flex flex-row   w-fit h-fit gap-5 items-center px-2 custom-font-mavan-pro ">
        {" "}
        {image}
        <div className="flex flex-col gap-1 font-semibold  ">
          <h3 className="interview-font-head">{heading}</h3>

          <div>
            <p className="interview-font-para font-normal">get from api</p>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default InterviewCards;
