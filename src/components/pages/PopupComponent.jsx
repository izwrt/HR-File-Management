import React from "react";
import { NavLink } from "react-router-dom";
import AddComment from "../common/AddComment";
import BlueButton from "../common/BlueButton";
import NewUpload from "../../assets/images/NewUpload";

const PopupComponent = ({ heading = "Default Header", onClose, props }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-30">
      <div className="homeBgColor rounded-md gap-6 shadow-lg w-[600px] h-[600px] flex flex-col relative">
        <div className="sticky top-0 w-full flex justify-between items-center px-6 pb-2 pt-6 z-20 bg-inherit border-b ">
          <h2 className="text-lg font-semibold custom-font-mavan-pro opacity-70 footer-font">
            {heading}
          </h2>
          <button onClick={onClose} className="hover:text-gray-800 text-2xl">
            &times;
          </button>
        </div>
        <div className="flex justify-start pl-6 w-full gap-x-10">
          {props.map((f) => (
            <NavLink
              to={f}
              key={f}
              className="font-semibold footer-font text-gray-500 text-md"
              activeClassName="active-link"
            >
              {f}
            </NavLink>
          ))}
        </div>
        <div className="flex justify-center">
          <div className="border-2 w-96 flex flex-col shadow h-52 border-dotted border-gray-600 rounded-lg justify-center items-center gap-y-4">
            <NewUpload />
            <div className="flex justify-center p-2 items-center gap-x-2 ">
              <h2 className="font-semibold custom-font-mavan-pro text-gray-500 text-xl">
                Drag and Drop file or
              </h2>
              <BlueButton label="Browse" />
            </div>
          </div>
        </div>
        <div className="flex w-full px-14 h-26 items-center">
          <AddComment />
        </div>
        <div className="flex justify-end px-14">
          <BlueButton label="Save" />
        </div>
      </div>
    </div>
  );
};

export default PopupComponent;
