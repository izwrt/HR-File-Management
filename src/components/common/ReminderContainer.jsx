import React from "react";
import SeeAll from "./SeeAll";
import Cards from "./Cards";
const ReminderContainer = () => {
  return (
    <div className="mt-2 flex flex-col justify-center items-center customWhiteColor rounded-3xl drop-shadow w-auto p-5 pb-10 mx-12">
      <SeeAll />
      <Cards />
    </div>
  );
};

export default ReminderContainer;
