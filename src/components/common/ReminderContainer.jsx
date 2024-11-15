import React from "react";
import SeeAll from "./SeeAll";
import Cards from "./Cards";
const ReminderContainer = () => {
  return (
    <div className="customWhiteColor rounded-3xl drop-shadow w-auto p-5 pb-10 bg-slate-500 ml-12 mr-12">
      <SeeAll />
      <Cards />
    </div>
  );
};

export default ReminderContainer;
