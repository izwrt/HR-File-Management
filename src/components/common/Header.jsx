// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import Bellicon from "../../assets/images/bellicon.jsx";
// import HomeLogo from "../../assets/images/HomeLogo.jsx";
// import { RxHamburgerMenu } from "react-icons/rx";

// const Header = ({openMenu,setOpenMenu,menuOpen}) => {
//   const [empImg, setEmpImg] = useState("N");

//   useEffect(() => {
//     (async () => {
//       try {
//         const res = await axios.get("http://localhost:8000/employees");
//         const employee = res?.data[0]?.empImg;
//         setEmpImg(employee);
//       } catch (error) {
//         console.error("Error fetching employee data:", error);
//       }
//     })();
//   }, []);

//   const handleNavigation = () => {
//     window.location.href = "https://puginarug.com/";
//   };

//   return (
//     <nav className="h-16 w-full flex items-center justify-end bg-white gap-[60%] pr-5 p-2 md:p-5 nav-container fixed z-20 ">

//       <div className="flex items-center w-full justify-between" >
//         <div className="flex justify-center items-center gap-4">
//           <RxHamburgerMenu size={25} className="opacity-70 md:opacity-70" onClick={menuOpen}/>
//         </div>
//         <div className="flex items-center  gap-8 ">
//           <ul className="text-black custom-font-mavan-pro font-sm text-[16px] text-opacity-70 flex items-center justify-center gap-8">
//           <li className="nav-hover" >Home</li>
//           <li className="nav-hover">Dashboard</li>
//           <li className="nav-hover" onClick={handlePopupToggle}> Settings</li>
//           <Bellicon />
//           </ul>
//           <div className=" h-12 w-12 overflow-hidden rounded-full border-[1.5px]  transition ease-out delay-100 hover:scale-105 cursor-pointer">
//           <img
//             className="h-full w-full object-center object-cover rounded-full"
//             src={empImg}
//             alt="Employee"
//           />
//           </div>
//         </div>

//       </div>
//     </nav>
//   );
// };

// export default Header;
// -----------------------------------------------------------------------------------------

import axios from "axios";
import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Bellicon from "../../assets/images/bellicon.jsx";
import SettingsPopup from "./SettingsPopup";
import { NavLink } from "react-router-dom";

const employees = [
  {
    employeeName: "Nakul V Kamath",
    department: "Developer",
    documentsToBeUploaded: ["Marks Card"],
    timePosted: "1 min ago",
    employeeImage:
      "https://img.freepik.com/free-photo/young-business-woman-working-laptop-office_1303-22814.jpg",
  },
  {
    employeeName: "Nakul V Kamath",
    department: "Developer",
    documentsToBeUploaded: ["Passport"],
    timePosted: "3 min ago",
    employeeImage:
      "https://images.pexels.com/photos/10376002/pexels-photo-10376002.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    employeeName: "Aditi Sharma",
    department: "HR",
    documentsToBeUploaded: ["Aadhar Card"],
    timePosted: "5 min ago",
    employeeImage:
      "https://media.istockphoto.com/id/1503232125/photo/happy-smile-and-portrait-of-business-man-in-city-for-professional-corporate-and-pride.jpg?s=612x612&w=0&k=20&c=uPu3GKHW507ruenLY8xwsB3OgOSwLSWjE3fBpy20Hac=",
  },
  {
    employeeName: "Rajesh Kumar",
    department: "Finance",
    documentsToBeUploaded: ["Salary Slips"],
    timePosted: "1h ago",
    employeeImage:
      "https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2016/02/Headshot-on-Black-Background_1.jpg?ssl=1",
  },
  {
    employeeName: "Rajesh Kumar",
    department: "Finance",
    documentsToBeUploaded: ["ID Proof"],
    timePosted: "5h ago",
    employeeImage:
      "https://images.pexels.com/photos/10376002/pexels-photo-10376002.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    employeeName: "Simran Verma",
    department: "Marketing",
    documentsToBeUploaded: ["Passport"],
    timePosted: "5d ago",
    employeeImage:
      "https://static.vecteezy.com/system/resources/thumbnails/024/354/241/small_2x/happy-girl-standing-in-creative-office-illustration-ai-generative-free-photo.jpg",
  },
  {
    employeeName: "Simran Verma",
    department: "Marketing",
    documentsToBeUploaded: ["Address Proof"],
    timePosted: "10d ago",
    employeeImage:
      "https://img.freepik.com/free-photo/portrait-cheerful-young-woman-standing-with-folded-arms-window_1098-17204.jpg",
  },
  {
    employeeName: "Ravi Gupta",
    department: "Developer",
    documentsToBeUploaded: ["Marks Card"],
    timePosted: "12d ago",
    employeeImage:
      "https://img.freepik.com/premium-photo/asian-woman-customer-service-glasses-smiling-holding-digital-tablet-isolated-white_333547-12020.jpg",
  },
  {
    employeeName: "Ravi Gupta",
    department: "Developer",
    documentsToBeUploaded: ["Marks Card"],
    timePosted: "20d ago",
    employeeImage:
      "https://img.freepik.com/premium-photo/young-asian-woman-isolated-background-keeping-arms-crossed-frontal-position_264197-40952.jpg",
  },
];

const Header = ({ openMenu, setOpenMenu, menuOpen, location }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [popUp, setPopUp] = useState(false);

  const [empImg, setEmpImg] = useState("N");

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("http://localhost:8000/employees");
        const employee = res?.data[0]?.empImg;
        setEmpImg(employee);
      } catch (error) {
        console.error("Error fetching employee data:", error);
      }
    })();
  }, []);

  const handleNavigation = () => {
    window.location.href = "https://puginarug.com/";
  };

  const onOpen = () => {
    setPopUp(true);
    setIsExiting(true);
  };

  const onClose = () => {
    setTimeout(() => {
      setPopUp(false);
    }, 300);
    setIsExiting(false);
  };

  const { pathname } = location;

  return (
    <nav className="h-16 w-full flex items-center justify-end bg-white gap-[60%] pr-5 p-2 md:p-5 nav-container fixed z-20">
      <div className="flex items-center w-full justify-between">
        <div className="flex justify-center items-center gap-4">
          {pathname !== "/" && (
            <RxHamburgerMenu
              size={25}
              className="opacity-70 md:opacity-70"
              onClick={menuOpen}
            />
          )}
        </div>
        <div className="flex items-center gap-8 ">
          <ul className="text-black custom-font-mavan-pro font-sm text-[16px] flex items-center justify-center gap-8">
            <NavLink to="/">
              <li className="nav-hover">Home</li>
            </NavLink>
            <NavLink to="/dashboard">
              <li className="nav-hover">Dashboard</li>
            </NavLink>
            <li className="nav-hover" onClick={onOpen}>
              Settings
            </li>

            <div className="group flex justify-center">
              <NavLink to="/notifications">
                <Bellicon className="tooltip" />
              </NavLink>
              <span className="absolute top-[65px] bg-white shadow-2xl w-[400px] h-0 group-hover:h-[500px] text-xs text-black overflow-y-auto overflow scroll-smooth scroll-padding right-[23px] duration-500 ease-in-out">
                <div className="">
                  <div className="px-5 py-4 flex flex-row items-center justify-between">
                    <div className="text-base font-bold">Notifications</div>
                    <button className="text-blue-500 hover:underline text-sm">
                      {" "}
                      Mark all as read
                    </button>
                  </div>

                  <div className="h-[1px] bg-gray-200 w-full"></div>

                  <div className="flex flex-col pt-2">
                    <div className=" flex flex-col gap-2">
                      {employees.map((employee, index) => {
                        return (
                          <div key={index}>
                            <div className="flex flex-row items-center justify-between">
                              <div className="flex flex-row gap-4 justify-start items-center py-3 px-5">
                                <img
                                  src={employee.employeeImage}
                                  className="h-[45px] w-[45px] rounded-full"
                                ></img>
                                <div className="font-semibold">
                                  {employee.employeeName}
                                  <span className="font-normal">
                                    {" "}
                                    yet to submit
                                  </span>
                                  <div className="text-blue-500">
                                    {employee.documentsToBeUploaded}
                                  </div>
                                </div>
                              </div>
                              <div className="font-extralight text-gray-500 pr-5">
                                {employee.timePosted}
                              </div>
                            </div>

                            <div className="h-[1px] bg-gray-200 w-full"></div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </span>
            </div>
          </ul>
          <div className="h-12 w-12 overflow-hidden rounded-full border-[1.5px] transition ease-out delay-100 hover:scale-105 cursor-pointer">
            <img
              className="h-full w-full object-center object-cover rounded-full"
              src={empImg}
              alt="Employee"
            />
          </div>
        </div>
      </div>
      {popUp && (
        <SettingsPopup onClose={onClose} isExiting={isExiting} popUp={popUp} />
      )}
    </nav>
  );
};

export default Header;
