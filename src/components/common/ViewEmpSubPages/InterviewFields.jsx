import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRef, useState } from "react";

function InterviewFields({ image, name, inputType, date, feedback }) {
  const inputRef = useRef(null);
  const [scheduleDate, setScheduleDate] = useState(new Date());
  const handleFile = () => {
    inputRef.current.click();
  };
  const handleScheduleDate = (date) => {
    setScheduleDate(date);
  };
  return (
    <div className="flex gap-10 items-center px-5 py-2 bg-[#F4F4F4]">
      {image}
      <div className="flex flex-col w-full">
        <span className="font-normal text-sm text-gray-500">{name}</span>
        {feedback ? (
          <input
            type="text"
            className="custom-date-input bg-[#f4f4f4] border-2 rounded-md px-2 focus:outline-none text-gray-400 border-gray-300 w-full h-14"
          />
        ) : date ? (
          <DatePicker
            className="border-2 pl-1 rounded-md border-gray-300 text-gray-400 custom-date-input bg-[#f4f4f4] focus:outline-none"
            dateFormat="dd/MM/yyyy"
            selected={scheduleDate}
            onChange={handleScheduleDate}
          />
        ) : (
          <div
            className="custom-date-input bg-[#F4F4F4] border-2 rounded-md px-2 border-gray-300 focus:outline-none text-gray-400 h-7 w-52"
            onClick={handleFile}
          >
            <input type="file" className="hidden" ref={inputRef} />
          </div>
          // <input
          //   type={inputType}
          //   className="custom-date-input bg-[#F4F4F4] border-2 rounded-md px-2 border-gray-300 focus:outline-none text-gray-400"
          // />
        )}
      </div>
    </div>
  );
}

export default InterviewFields;
