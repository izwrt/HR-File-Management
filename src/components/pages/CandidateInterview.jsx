import React from "react";
import InterviewCards from "../common/InterviewCards";
import { useState } from "react";
import AddComment from "../common/AddComment";
import BlueButton from "../common/BlueButton";

import Education from "../../assets/images/Education";
import Schedule from "../../assets/images/Schedule";
import Feedback from "../../assets/images/Feedback";
import YearOfPassing from "../../assets/images/YearOfPassing";

const CandidateInterview = () => {
  return (
    <div className="mt-40 customWhiteColor shadow w-5/2 ml-60 mr-5 h-full p-4 rounded-md">
      <div className="flex flex-row justify-between p-2 items-center">
        <h2 className="font-bold  w-fit">First Round</h2>
        <BlueButton label="Add" />
      </div>
      <div className="grid grid-cols-2 gap-5  py-5">
        <InterviewCards heading={"Schedule"} image={<Schedule />} />
        <InterviewCards heading={"Year Of Passing"} image={<YearOfPassing />} />
        <InterviewCards heading={"Feedback"} image={<Feedback />} />
      </div>
      <AddComment />
      <div className="bg-w-full flex justify-center gap-14 p-5">
        <BlueButton label="Save" />
        <BlueButton label="Cancel" />
      </div>
    </div>
  );
};

export default CandidateInterview;
