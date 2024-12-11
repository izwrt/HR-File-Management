import { useRef, useState } from "react";
import Schedule from "../../../assets/images/InterviewPageImages/Schedule";
import BlueButton from "../BlueButton";
import InterviewFields from "./InterviewFields";
import Feedback from "../../../assets/images/InterviewPageImages/Feedback";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaFileUpload } from "react-icons/fa";
import Edit from "../../../assets/images/AboutPageImages/Edit";

const Interview = () => {
  const [rounds, setRounds] = useState([1]);
  const [editInterview, setEditInterview] = useState(false);
  function handleRound() {
    setRounds([...rounds, rounds[rounds.length - 1] + 1]);
  }
  const handleEditInterview = () => {
    setEditInterview((prev) => !prev);
  };
  function handleClose(index) {
    setRounds(
      rounds.filter((r, i) => {
        return i !== index;
      })
    );
  }
  console.log(rounds);
  return (
    <div className=" custom-font-mavan-pro bg-white rounded-lg pb-4">
      <div
        className="flex justify-end mr-5 mt-3 pt-5 h-[55px]"
        onClick={handleEditInterview}
      >
        {editInterview ? (
          <BlueButton label={"Add"} onClick={handleRound} className="" />
        ) : (
          <Edit />
        )}
      </div>
      {rounds.map((round, index) => (
        <>
          <div className="flex justify-between items-center mr-5 my-2">
            <div className="font-semibold pl-5">Round {round}</div>
            {rounds.length === 1
              ? " "
              : editInterview && (
                  <IoIosCloseCircleOutline
                    size={20}
                    onClick={() => {
                      return handleClose(index);
                    }}
                  />
                )}
          </div>
          <div key={index} className="grid grid-cols-2 gap-8 mx-5 mb-2 ">
            <InterviewFields
              image={<Schedule />}
              name="Schedule"
              inputType="date"
              date={true}
              feedback={false}
            />
            <InterviewFields
              image={<FaFileUpload fill="#B7B7B7" size={24} />}
              name={"Upload File"}
              inputType={"file"}
              date={false}
              feedback={false}
            />
            <div className="col-span-2">
              <InterviewFields
                image={<Feedback />}
                name={"Feedback"}
                inputType={"text"}
                date={false}
                feedback={true}
              />
            </div>
          </div>
        </>
      ))}

      <textarea
        type="text"
        className="rounded-lg mt-8 ml-5 w-full focus:outline-none border-4 p-1 xl:w-[96.5%] 2xl:w-[97.5%] pb-10 min-w-max flex-wrap"
        placeholder="Add Comments"
      ></textarea>
      {editInterview && (
        <div className="flex gap-7 mt-3 pl-6 justify-center">
          <BlueButton label={"Save"} />
          <BlueButton label={"Cancel"} />
        </div>
      )}
    </div>
  );
};

export default Interview;
