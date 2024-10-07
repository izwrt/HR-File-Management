// import React from "react";
// import AddComment from "../common/AddComment";
// import BlueButton from "../common/BlueButton";

// const PopupComponent = () => {
//   return (
//     <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-30">
//       <div
//         className="bg-white p-6 rounded-md shadow-lg w-[600px] h-[600px] flex relative"
//       >
//         <div className="absolute top-0 left-0 w-full flex justify-between items-center p-4 pt-6 bg-white">
//           <h2 className="text-xl font-semibold pl-5 footer-font">Settings</h2>
//           <button className="text-gray-600 hover:text-gray-800 text-2xl pr-5">
//             &times;
//           </button>
//         </div>
//         <div className="flex mt-20 w-full">
//           <AddComment />
//         </div><BlueButton label="Save"/>
//       </div>
//     </div>
//   );
// };

// export default PopupComponent;

// import React from "react";
// import AddComment from "../common/AddComment";
// import BlueButton from "../common/BlueButton";

// const PopupComponent = ({ heading }) => {
//   return (
//     <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-30">
//       <div
//         className="bg-white p-6 rounded-md shadow-lg w-[600px] h-[600px] flex relative"
//       >
//         <div className="absolute top-0 left-0 w-full flex justify-between items-center p-4 pt-6 bg-white">
//           <h2 className="text-xl font-semibold pl-5 footer-font">{heading}</h2>
//           <button className="text-gray-600 hover:text-gray-800 text-2xl pr-5">
//             &times;
//           </button>
//         </div>
//         <div className="flex mt-20 w-full">
//           <AddComment />
//         </div>
//         {/* <BlueButton label="Save" /> */}
//       </div>
//     </div>
//   );
// };

// export default PopupComponent;

// import React from "react";
// import AddComment from "../common/AddComment";
// import BlueButton from "../common/BlueButton";
// import SampleImage from "../../assets/images/UploadFile.png";

// const PopupComponent = ({ heading }) => {
//   return (
//     <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-30">
//       <div className="bg-white p-6 rounded-md shadow-lg w-[600px] h-[600px] flex flex-col relative">
//         <div className="absolute top-0 left-0 w-full flex justify-between items-center p-4 pt-6 bg-white">
//           <h2 className="text-xl font-semibold pl-5 footer-font">{heading}</h2>
//           <button className="text-gray-600 hover:text-gray-800 text-2xl pr-5">
//             &times;
//           </button>
//         </div>

//         {/* Dotted box with image */}
//         <div className="mt-20 flex justify-center w-full">
//           <div className="border-2 border-dotted border-gray-400 w-72 h-16  p-4 rounded-md flex justify-center items-center">
//           <img className="w-10" src={SampleImage} alt="Facebook" />
//           </div>
//         </div>

//         {/* Add Comment Component */}
//         <div className="flex w-full justify-center mt-8">
//           <AddComment />
//         </div>

//         <div className="mt-auto">
//           <BlueButton label="Save" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PopupComponent;

// import React from "react";
// import AddComment from "../common/AddComment";
// import BlueButton from "../common/BlueButton";
// import SampleImage from "../../assets/images/UploadFile.png"; // Replace with the correct path to your image

// const PopupComponent = ({ heading="Default" }) => {
//   return (
//     <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-30">
//       <div
//         className="bg-white p-6 rounded-md shadow-lg w-[600px] h-[600px] flex flex-col relative"
//         style={{ width: "600px", height: "600px" }} // Fixed size
//       >
//         <div className="absolute top-0 left-0 w-full flex justify-between items-center p-4 pt-6 bg-white">
//           <h2 className="text-xl font-semibold pl-5 footer-font">{heading}</h2>
//           <button className="text-gray-600 hover:text-gray-800 text-2xl pr-5">
//             &times;
//           </button>
//         </div>

//         {/* Dotted box with image */}
//         <div className="mt-20 flex justify-center w-full">
//           <div className="border-2 border-dotted border-gray-400 p-4 rounded-md flex justify-center items-center">
//             <img src={SampleImage} alt="Popup" className="w-24 h-24 object-cover" />
//           </div>
//         </div>

//         {/* Add Comment Component */}
//         <div className="flex w-full justify-center mt-8">
//           <AddComment />
//         </div>

//         <div className="mt-auto">
//           <BlueButton label="Save" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PopupComponent;

// import React from "react";
// import AddComment from "../common/AddComment";
// import BlueButton from "../common/BlueButton";
// import SampleImage from "../../assets/images/UploadFile.png";

// const PopupComponent = ({ heading = "Default Header" }) => {
//   return (
//     <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-30">
//       <div
//         className="bg-white p-6 gap-11 rounded-md shadow-lg w-[800px] h-[600px] flex flex-col relative"
//         style={{ width: "800px", height: "600px" }}
//       >
//         <div className="absolute top-0 left-0 w-full flex justify-between items-center p-4 pt-6 bg-white">
//           <h2 className="text-xl font-semibold pl-5 footer-font">{heading}</h2>
//           <button className="text-gray-600 hover:text-gray-800 text-2xl pr-5">
//             &times;
//           </button>
//         </div>
//         <div className=" flex justify-center w-full ">
//           <div className="border-2 w-96 mt-12 flex flex-col  shadow h-56 border-dotted border-gray-600  rounded-lg  justify-center items-center">
//             <img
//               src={SampleImage}
//               alt="Popup"
//               className="flex w-24 h-24 object-cover"
//             />
//             <div className="flex mt-4 justify-center  p-2 items-center gap-2">  <h2 className="font-semibold custom-font-mavan-pro  text-gray-500 text-xl">
//               Drag and Drop file or
//             </h2>
//              <BlueButton label="Browse" /></div>

//           </div>
//         </div>

//         <div className="flex justify-center w-full  px-28 p-2">
//           <AddComment />
//         </div>

//         <div className="flex justify-end p-2 px-28">
//           <BlueButton label="Save" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PopupComponent;

// import React from "react";
// import { NavLink, Outlet } from "react-router-dom"; // Import NavLink and Outlet
// import AddComment from "../common/AddComment";
// import BlueButton from "../common/BlueButton";
// import SampleImage from "../../assets/images/UploadFile.png";

// const fruits = ["dummyone", "Orange", "Banana", "Grapes"]; // Array of links

// const PopupComponent = ({ heading = "Default Header" }) => {
//   return (
//     <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-30">
//       <div
//         className="bg-white p-6 gap-11 rounded-md shadow-lg w-[800px] h-[600px] flex flex-col relative"
//         style={{ width: "800px", height: "600px" }}
//       >
//         <div className="absolute top-0 left-0 w-full flex justify-between items-center p-4 pt-6 bg-white">
//           <h2 className="text-xl font-semibold pl-5 footer-font">{heading}</h2>
//           <button className="text-gray-600 hover:text-gray-800 text-2xl pr-5">
//             &times;
//           </button>
//         </div>
//         <div className="mt-16 flex justify-center w-full gap-10">
//           {fruits.map((f) => (
//             <NavLink
//               to={f}
//               key={f}
//               className="fruit-link text-gray-500 font-semibold text-lg"
//               activeClassName="active"
//             >
//               {f}
//             </NavLink>
//           ))}
//         </div>
//         <div className="flex justify-center w-full">
//           <div className="border-2 w-96 mt-12 flex flex-col shadow h-56 border-dotted border-gray-600 rounded-lg justify-center items-center">
//             <img
//               src={SampleImage}
//               alt="Popup"
//               className="flex w-24 h-24 object-cover"
//             />
//             <div className="flex mt-4 justify-center p-2 items-center gap-2">
//               <h2 className="font-semibold custom-font-mavan-pro text-gray-500 text-xl">
//                 Drag and Drop file or
//               </h2>
//               <BlueButton label="Browse" />
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-center w-full px-28 p-2">
//           <AddComment />
//         </div>
//         <div className="flex justify-end p-2 px-28">
//           <BlueButton label="Save" />
//         </div>
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default PopupComponent;

import React from "react";
import { NavLink, Outlet } from "react-router-dom"; // Import NavLink and Outlet
import AddComment from "../common/AddComment";
import BlueButton from "../common/BlueButton";
import SampleImage from "../../assets/images/UploadFile.png";

const props = ["Certifications"];

const PopupComponent = ({ heading = "Default Header" }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-30">
      <div
        className="bg-white p-6 gap-6 rounded-md shadow-lg w-[800px] h-[600px] flex flex-col relative"
        style={{ width: "800px", height: "600px" }}
      >
        <div className="absolute top-0 left-0 w-full flex justify-between items-center p-4 pt-6 bg-white">
          <h2 className="text-xl font-semibold pl-5 footer-font">{heading}</h2>
          <button className="text-gray-600 hover:text-gray-800 text-2xl pr-5">
            &times;
          </button>
        </div>
        <div className="mt-12 flex justify-start pl-3 w-full gap-x-10">
          {props.map((f) => (
            <NavLink
              to={f}
              key={f}
              className="font-semibold footer-font  text-gray-500 text-md"
              activeClassName="active-link"
            >
              {f}
            </NavLink>
          ))}
        </div>
        <div className="flex justify-center w-full">
          <div className="border-2 w-96 flex flex-col shadow h-56 border-dotted border-gray-600 rounded-lg justify-center items-center">
            <img
              src={SampleImage}
              alt="Popup"
              className="flex w-24 h-24 object-cover"
            />
            <div className="flex  justify-center p-2 items-center gap-x-2">
              <h2 className="font-semibold custom-font-mavan-pro text-gray-500 text-xl">
                Drag and Drop file or
              </h2>
              <BlueButton label="Browse" />
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full px-28">
          <AddComment />
        </div>
        <div className="flex justify-end px-28">
          <BlueButton label="Save" />
        </div>
      </div>
    </div>
  );
};

export default PopupComponent;
