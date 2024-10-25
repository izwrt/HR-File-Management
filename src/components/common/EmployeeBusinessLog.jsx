import { Link } from "react-router-dom";

const EmployeeBusinessLog = ({
  employeeName,
  client,
  startDate,
  endDate,
  status,
  action,
  color,
  fontWeight,
  position,
  id,
}) => {
  return (
    <div className="scroll-cards-b">
      <div
        className={`text-black ${fontWeight} text-sm p-3 pr-12 custom-font-mavan-pro ${color} ${position} flex justify-between md:w-[1000px]`}
      >
        <span className="opacity-60 w-[100px]">{id}</span>
        <span className="opacity-60 w-[200px]">{employeeName}</span>
        <span className="opacity-60 w-[100px]">{client} </span>
        <span className="opacity-60 w-[100px]">{startDate} </span>
        <span className="opacity-60 w-[100px]">{endDate} </span>
        <span className="opacity-60 w-[100px]">{status} </span>
        <Link to={`/viewemployee/${id}`}>
          <span className="opacity-60 w-[100px] flex justify-center">
            {action}{" "}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default EmployeeBusinessLog;
