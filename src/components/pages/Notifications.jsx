import { useState, useEffect, useMemo } from "react";
import BlueButton from "../common/BlueButton";
import NotificationComponent from "../common/NotificationComponent";
import { GrLinkPrevious } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import NotificationComponent from "../common/NotificationComponent";
import { CiFilter, CiSearch } from "react-icons/ci";
import debounce from "lodash.debounce";
import NotificationShimmer from "../common/SImmerComponents/NotificationShimmer";

const employees = [
  {
    id: 1,
    employeeName: "Nakul V Kamath",
    department: "Developer",
    documentsToBeUploaded: ["Marks Card"],
    timePosted: "1 min ago",
    employeeImage:
      "https://img.freepik.com/free-photo/young-business-woman-working-laptop-office_1303-22814.jpg",
    employeeId: 1178,
  },
  {
    id: 2,
    employeeName: "Nakul V Kamath",
    department: "Developer",
    documentsToBeUploaded: ["Passport"],
    timePosted: "3 min ago",
    employeeImage:
      "https://images.pexels.com/photos/10376002/pexels-photo-10376002.jpeg?auto=compress&cs=tinysrgb&w=600",
    employeeId: 1178,
  },
  {
    id: 3,
    employeeName: "Aditi Sharma",
    department: "HR",
    documentsToBeUploaded: ["Aadhar Card"],
    timePosted: "5 min ago",
    employeeImage:
      "https://media.istockphoto.com/id/1503232125/photo/happy-smile-and-portrait-of-business-man-in-city-for-professional-corporate-and-pride.jpg?s=612x612&w=0&k=20&c=uPu3GKHW507ruenLY8xwsB3OgOSwLSWjE3fBpy20Hac=",
    employeeId: 1179,
  },
  {
    id: 4,
    employeeName: "Rajesh Kumar",
    department: "Finance",
    documentsToBeUploaded: ["Salary Slips"],
    timePosted: "1h ago",
    employeeImage:
      "https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2016/02/Headshot-on-Black-Background_1.jpg?ssl=1",
    employeeId: 1180,
  },
  {
    id: 5,
    employeeName: "Rajesh Kumar",
    department: "Finance",
    documentsToBeUploaded: ["ID Proof"],
    timePosted: "5h ago",
    employeeImage:
      "https://images.pexels.com/photos/10376002/pexels-photo-10376002.jpeg?auto=compress&cs=tinysrgb&w=600",
    employeeId: 1180,
  },
  {
    id: 6,
    employeeName: "Simran Verma",
    department: "Marketing",
    documentsToBeUploaded: ["Passport"],
    timePosted: "5d ago",
    employeeImage:
      "https://static.vecteezy.com/system/resources/thumbnails/024/354/241/small_2x/happy-girl-standing-in-creative-office-illustration-ai-generative-free-photo.jpg",
    employeeId: 1181,
  },
  {
    id: 7,
    employeeName: "Simran Verma",
    department: "Marketing",
    documentsToBeUploaded: ["Address Proof"],
    timePosted: "10d ago",
    employeeImage:
      "https://img.freepik.com/free-photo/portrait-cheerful-young-woman-standing-with-folded-arms-window_1098-17204.jpg",
    employeeId: 1181,
  },
  {
    id: 8,
    employeeName: "Ravi Gupta",
    department: "Developer",
    documentsToBeUploaded: ["Marks Card"],
    timePosted: "12d ago",
    employeeImage:
      "https://img.freepik.com/premium-photo/asian-woman-customer-service-glasses-smiling-holding-digital-tablet-isolated-white_333547-12020.jpg",
    employeeId: 1182,
  },
  {
    id: 9,
    employeeName: "Ravi Gupta",
    department: "Developer",
    documentsToBeUploaded: ["Marks Card"],
    timePosted: "20d ago",
    employeeImage:
      "https://img.freepik.com/premium-photo/young-asian-woman-isolated-background-keeping-arms-crossed-frontal-position_264197-40952.jpg",
    employeeId: 1182,
  },
];

function Notifications() {
  const [empData, setEmpData] = useState([]);
  const [searchEmployee, setSearchEmployee] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setIsLoading(false);
    setSearchEmployee(e.target.value);
  };

  const debouncedHandleChange = useMemo(() => {
    return debounce((event) => {
      handleChange(event);
    }, 300);
  }, []);

  const handleInputChange = (e) => {
    setIsLoading(true);
    debouncedHandleChange(e);
  };

  useEffect(() => {
    setEmpData(employees.map((emp) => ({ ...emp, checked: false })));
  }, []);

  const navigate = useNavigate();

  const handlePreviousPage = () => {
    navigate(-1);
  };

  const filteredEmployees = useMemo(() => {
    return empData.filter((emp) => {
      const searchMatch =
        searchEmployee === "" ||
        emp.employeeName.toLowerCase().includes(searchEmployee.toLowerCase()) ||
        emp.employeeId.toString().includes(searchEmployee);

      return searchMatch;
    });
  }, [employees, searchEmployee, empData]);
  console.log("krkrS");

  const selectEmployee = (e) => {
    const { id, checked } = e.target;
    if (id === "SelectAllEmp") {
      setEmpData(empData.map((emp) => ({ ...emp, checked: checked })));
    } else {
      const tempEmployee = empData.map((emp) =>
        parseInt(id) === emp?.id ? { ...emp, checked: checked } : { ...emp }
      );
      setEmpData(tempEmployee);
    }
  };

  return (
    <div className="relative mt-20 ml-[220px] 2xl:ml-[230px] md:ml-0 h-fit pl-8 pr-12 md:pl-5 md:pr-6 pb-4">
      <div className="flex flex-row items-center justify-between">
        <GrLinkPrevious
          onClick={handlePreviousPage}
          className="cursor-pointer"
        />
        <span className="flex gap-1 items-center">
          <label
            htmlFor="search"
            className="border border-slate-200 flex w-[200px] items-center p-[2px] px-[6px] gap-1.5 textbox-color"
          >
            <CiSearch className="size-5 stroke-1 h-fit opacity-40" />
            <input
              type="text"
              name="search"
              className="w-full focus:outline-none textbox-color custom-font-mavan-pro opacity-80"
              placeholder="Search"
              onChange={handleInputChange}
              autoComplete="off"
            />
          </label>
        </span>
      </div>

      <div className=" border-2 text-black w-full h-12 mt-4 grid grid-cols-[auto_2fr_1fr_1.5fr_1fr_1fr] items-center justify-start opacity-80 bg-gray-100">
        <input
          type="checkbox"
          className="w-5 h-5 mx-6 appearance-none checked:bg-green-500 border-2 border-gray-400 rounded-lg"
          onChange={selectEmployee}
          checked={empData.every((emp) => emp?.checked)}
          id="SelectAllEmp"
        ></input>
        <div className="font-extralight">Employee Name / (id)</div>
        <div></div>
        <div className="font-extralight">Department</div>
        <div className="font-extralight">Upload Pending </div>
      </div>
      <div className="overflow-y-auto">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2  md:mt-8">
            {Array.from({ length: 10 }).map((_, index) => (
              <NotificationShimmer key={index} />
            ))}
          </div>
        ) : (
          filteredEmployees.map((employee) => (
            <NotificationComponent
              key={employee.id}
              empid={employee.id}
              employeeName={employee.employeeName}
              department={employee.department}
              documentsToBeUploaded={employee.documentsToBeUploaded}
              timePosted={employee.timePosted}
              employeeImage={employee.employeeImage}
              employeeId={employee.employeeId}
              checked={employee.checked}
              selectEmployee={selectEmployee}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Notifications;
