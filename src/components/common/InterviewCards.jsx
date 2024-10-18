import React from "react";

const InterviewCards = ({
  heading = "Default Header",
  onClose,
  props,
  image,
  personalDetailsAction,
  professionalDetailsAction,
}) => {
  return (
    <div className="card-color p-2 m-6">
      <div className="flex flex-row gap-5 items-center px-2 h-14 custom-font-mavan-pro ">
        {image}
        <div className="flex flex-col font-semibold h-12 ">
          <h3 className="interview-font-head">{heading}</h3>
          <div>
            {personalDetailsAction && (
              <input
                type="text"
                className="card-color border-2 border-card-color rounded-md focus:outline-none focus:border-card-color font-light text-card-color"
              />
            )}
            {professionalDetailsAction && (
              <input
                type="text"
                className="card-color border-2 border-card-color rounded-md focus:outline-none focus:border-card-color font-light text-card-color"
              />
            )}
            <div>
              {!professionalDetailsAction && !personalDetailsAction && (
                <p className="interview-font-para font-normal">get from api</p>
              )}
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default InterviewCards;
