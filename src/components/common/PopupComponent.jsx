import React,{useRef} from "react";
import { NavLink } from "react-router-dom";
import NewUpload from "../../assets/images/NewUpload";
import AddComment from "./AddComment";
import BlueButton from "./BlueButton";


const PopupComponent = ({ heading = "Default Header", onClose }) => {

  const ref = useRef(null);
  
  const list = ["one","two"]
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-30">
      <div className="homeBgColor rounded-lg shadow-lg w-[600px] h-[600px] flex flex-col relative ">
        <div className="sticky top-0 w-full flex justify-between items-center px-6 pb-2 pt-6 z-20 border-b ">
          <h2 className="text-lg font-semibold custom-font-mavan-pro opacity-70 footer-font">
            {heading}
          </h2>
          <button onClick={onClose} className="hover:text-gray-800 text-2xl">
            &times;
          </button>
        </div>
          <div className="px-6">
          <div className="flex   w-full gap-x-10 py-3">
          {list.map((f) => (
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
        <div className="flex justify-center  py-5">
          <div className="border-2 w-96 flex flex-col shadow h-52 border-dotted border-gray-400 rounded-lg justify-center items-center gap-y-6 relative hover:opacity-70 "
           onDragEnter={handleDragEnter}
           >
            <NewUpload />
            <div className="flex justify-center items-center gap-x-4 ">
              <h2 className="font-semibold custom-font-mavan-pro opacity-50 text-lg">
                Drag and Drop file or Browse
              </h2>
              <input type="file" className="absolute top-0 h-full w-full bg-red-400 opacity-0 cursor-pointer"/>
            </div>
          </div>
        </div>
        <div className="flex w-full h-26 items-center py-5">
          <AddComment />
        </div>
        <div className="flex justify-end ">
          <BlueButton label="Save" />
        </div>
          </div>
      </div>
    </div>
  );
};

export default PopupComponent;
