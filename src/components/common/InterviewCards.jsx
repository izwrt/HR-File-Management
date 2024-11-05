import React from "react";

const InterviewCards = ({
  heading = "Default Header",
  onClose,
  props,
  image,
  onClick1,
  onClick2,
}) => {
  return (
    <div className="card-color p-2 mb-4 ml-4 mr-4">
      <div className="flex flex-row gap-5 items-center px-2 h-14 custom-font-mavan-pro ">
        {image}
        <div className="flex flex-col font-semibold h-12 ">
          <h3 className="interview-font-head">{heading}</h3>
          <div>
            {onClick1 && (
              <input
                type="text"
                className="card-color px-1 border-2 border-card-color rounded-md focus:outline-none focus:border-card-color font-light text-card-color"
              />
            )}
            {onClick2 && (
              <input
                type="text"
                className="card-color border-2 border-card-color rounded-md focus:outline-none focus:border-card-color font-light text-card-color"
              />
            )}
            <div>
              {!onClick2 && !onClick1 && (
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
