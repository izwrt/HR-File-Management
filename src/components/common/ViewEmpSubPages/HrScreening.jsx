import React, { useState } from "react";
import BlueButton from "../BlueButton";
import InterviewCards from "../InterviewCards";
import Communication from "../../../assets/images/HrScreeningImages/Communication";
import TotalExperience from "../../../assets/images/HrScreeningImages/TotalExperience";
import CurrentCTC from "../../../assets/images/HrScreeningImages/CurrentCTC";
import RelevantExperience from "../../../assets/images/HrScreeningImages/RelevantExperience";
import ExpectedCTC from "../../../assets/images/HrScreeningImages/ExpectedCTC";
import NoticePeriod from "../../../assets/images/HrScreeningImages/NoticePeriod";
import OfferInHand from "../../../assets/images/HrScreeningImages/OfferInHand";
import Position from "../../../assets/images/HrScreeningImages/Position";
import Source from "../../../assets/images/HrScreeningImages/Source";
import HRName from "../../../assets/images/HrScreeningImages/HRName";
import Degree from "../../../assets/images/HrScreeningImages/Degree";
import YearOfPassing from "../../../assets/images/HrScreeningImages/YearOfPassing";
import College from "../../../assets/images/HrScreeningImages/College";
import MarksCardUpload from "../../../assets/images/HrScreeningImages/MarksCardUpload";
import Edit from "../../../assets/images/AboutPageImages/Edit";

const HrScreening = () => {
  const [hrScreening, setHrScreening] = useState(false);
  const [rounds, setRounds] = useState([1]);
  const handleHrScreeningDetails = () => {
    setHrScreening((prev) => !prev);
  };

  const handleEducation = () => {
    setRounds([...rounds, rounds.length + 1]);
    console.log(rounds.length);
  };
  return (
    <div className=" rounded-lg custom-font-mavan-pro bg-white">
      <div className="p-4 font-semibold flex justify-between items-center h-[70px]">
        <div>HR Screening</div>
        <div onClick={handleHrScreeningDetails}>
          {hrScreening ? "" : <Edit />}
        </div>
      </div>
      <div className="grid grid-cols-2 2xl:grid-cols-3">
        <InterviewCards
          image={<Communication />}
          heading="Communication"
          onClick1={hrScreening}
        />
        <InterviewCards
          image={<TotalExperience />}
          heading="Total Experience"
          onClick1={hrScreening}
        />
        <InterviewCards
          image={<CurrentCTC />}
          heading="Current CTC"
          onClick1={hrScreening}
        />
        <InterviewCards
          image={<RelevantExperience />}
          heading="Relevant Experience"
          onClick1={hrScreening}
        />
        <InterviewCards
          image={<ExpectedCTC />}
          heading="Expected CTC"
          onClick1={hrScreening}
        />
        <InterviewCards
          image={<NoticePeriod />}
          heading="Notice Period"
          onClick1={hrScreening}
        />
        <InterviewCards
          image={<OfferInHand />}
          heading="Offer In Hand"
          onClick1={hrScreening}
        />
        <InterviewCards
          image={<Position />}
          heading="Position"
          onClick1={hrScreening}
        />
        <InterviewCards
          image={<Source />}
          heading="Source"
          onClick1={hrScreening}
        />
        <InterviewCards
          image={<HRName />}
          heading="HR Name"
          onClick1={hrScreening}
        />
      </div>
      <div className="p-6 font-semibold flex justify-between items-center h-[70px]">
        <div>Education</div>
        {hrScreening && rounds.length < 3 ? (
          <BlueButton label={"Add"} onClick={handleEducation} />
        ) : (
          ""
        )}
      </div>
      <div className=" grid grid-cols-2 2xl:grid-cols-3">
        <InterviewCards
          image={<Degree />}
          heading="Degree"
          onClick1={hrScreening}
        />
        <InterviewCards
          image={<YearOfPassing />}
          heading="Year Of Passing"
          onClick1={hrScreening}
        />
        <InterviewCards
          image={<College />}
          heading="College"
          onClick1={hrScreening}
        />
        <InterviewCards
          image={<MarksCardUpload />}
          heading="Marks Card Upload"
          onClick1={hrScreening}
        />
      </div>
      {rounds.length >= 2 && (
        <div className="grid grid-cols-2 2xl:grid-cols-3">
          <InterviewCards
            image={<Degree />}
            heading="12th Percentage"
            onClick1={hrScreening}
          />
          <InterviewCards
            image={<YearOfPassing />}
            heading="Year Of Passing"
            onClick1={hrScreening}
          />
          <InterviewCards
            image={<College />}
            heading="College"
            onClick1={hrScreening}
          />
          <InterviewCards
            image={<MarksCardUpload />}
            heading="Marks Card Upload"
            onClick1={hrScreening}
          />
        </div>
      )}
      {rounds.length === 3 && (
        <div className="grid grid-cols-2 2xl:grid-cols-3">
          <InterviewCards
            image={<Degree />}
            heading="10th Percentage"
            onClick1={hrScreening}
          />
          <InterviewCards
            image={<YearOfPassing />}
            heading="Year Of Passing"
            onClick1={hrScreening}
          />
          <InterviewCards
            image={<College />}
            heading="School"
            onClick1={hrScreening}
          />
          <InterviewCards
            image={<MarksCardUpload />}
            heading="Marks Card Upload"
            onClick1={hrScreening}
          />
        </div>
      )}

      <div className="px-4 py-10">
        {hrScreening ? (
          <textarea
            className="p-3 border flex justify-center items-center  shadow border-gray-400 w-full h-20 font-medium  custom-font-mavan-pro text-gray-600 resize-none focus:outline-none"
            placeholder="Add comments..."
          ></textarea>
        ) : (
          <textarea
            className="p-3 flex justify-center items-center  shadow border-gray-400 w-full h-20 font-medium card-color  custom-font-mavan-pro text-gray-600 resize-none focus:outline-none"
            readOnly
            value={"get from api"}
          ></textarea>
        )}
      </div>
      <div className="flex justify-center gap-10 pb-6">
        {hrScreening ? (
          <BlueButton label={"Save"} onClick={handleHrScreeningDetails} />
        ) : (
          <div className="py-5"></div>
        )}
        {hrScreening ? (
          <BlueButton label={"Cancel"} />
        ) : (
          <div className="py-5"></div>
        )}
      </div>
    </div>
  );
};

export default HrScreening;
