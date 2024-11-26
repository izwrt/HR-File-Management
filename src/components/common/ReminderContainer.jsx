import React from "react";
import SeeAll from "./SeeAll";
import Cards from "./Cards";
const ReminderContainer = () => {
  return (
    <div className="mt-2 customWhiteColor rounded-3xl drop-shadow w-auto p-5 pb-10 bg-slate-500 mx-12">
      <SeeAll />
      <Cards />
    </div>
  );
};

export default ReminderContainer;
