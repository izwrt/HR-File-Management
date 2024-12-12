import { useState } from "react";
import BlueButton from "../common/BlueButton";
import NotificationComponent from "../common/NotificationComponent";
import { GrLinkPrevious } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const employees = [
  {
    employeeName: "Nakul V Kamath",
    department: "Developer",
    documentsToBeUploaded: ["Marks Card"],
    timePosted: "1 min ago",
  },
  {
    employeeName: "Nakul V Kamath",
    department: "Developer",
    documentsToBeUploaded: ["Passport"],
    timePosted: "3 min ago",
  },
  {
    employeeName: "Aditi Sharma",
    department: "HR",
    documentsToBeUploaded: ["Aadhar Card"],
    timePosted: "5 min ago",
  },
  {
    employeeName: "Rajesh Kumar",
    department: "Finance",
    documentsToBeUploaded: ["Salary Slips"],
    timePosted: "1h ago",
  },
  {
    employeeName: "Rajesh Kumar",
    department: "Finance",
    documentsToBeUploaded: ["ID Proof"],
    timePosted: "5h ago",
  },
  {
    employeeName: "Simran Verma",
    department: "Marketing",
    documentsToBeUploaded: ["Passport"],
    timePosted: "5d ago",
  },
  {
    employeeName: "Simran Verma",
    department: "Marketing",
    documentsToBeUploaded: ["Address Proof"],
    timePosted: "10d ago",
  },
  {
    employeeName: "Ravi Gupta",
    department: "Developer",
    documentsToBeUploaded: ["Marks Card"],
    timePosted: "12d ago",
  },
  {
    employeeName: "Ravi Gupta",
    department: "Developer",
    documentsToBeUploaded: ["Marks Card"],
    timePosted: "20d ago",
  },
];

function Notifications() {
  const [selectAll, setSelectAll] = useState(false);
  const navigate = useNavigate();
  const handleSelectAll = () => {
    setSelectAll((prev) => !prev);
  };

  const handlePreviousPage = () => {
    navigate(-1);
  };
  return (
    <div className="relative mt-20 ml-[220px] 2xl:ml-[230px] md:ml-0 h-fit pl-8 pr-12 md:pl-5 md:pr-6">
      <GrLinkPrevious onClick={handlePreviousPage} className="cursor-pointer" />
      <div className="customColorBlue-lite text-black w-full h-12 mt-4 grid grid-cols-[auto_1fr_1fr_1fr_1fr] items-center justify-start opacity-80">
        <input
          type="checkbox"
          className="w-6 h-6 mx-6 appearance-none checked:bg-green-500 border-2 border-gray-400 rounded-lg"
          onClick={handleSelectAll}
        ></input>
        <div>Employee Name</div>
        <div>Department</div>
        <div>Documents Yet To Be Uploaded</div>
        <div></div>
      </div>
      <div className="overflow-y-auto">
        {employees.map((employee, index) => (
          <NotificationComponent
            key={index}
            employeeName={employee.employeeName}
            department={employee.department}
            documentsToBeUploaded={employee.documentsToBeUploaded}
            timePosted={employee.timePosted}
          />
        ))}
      </div>
    </div>
  );
}

export default Notifications;
