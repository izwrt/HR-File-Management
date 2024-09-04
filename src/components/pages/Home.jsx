import React from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";

import ReminderCard from "../common/ReminderContainer";
import UnitsStatus from "../common/UnitsStatus";
import UnitsNav from "../common/UnitsNav";

const Home = () => {
  return (
    <div className="homeBgColor ">
      <Header />
      <h1 className="custom-font-mavan-pro font-bold text-lg ml-6 p-5  homeActiveColor ">
        Important Reminders
      </h1>
      <ReminderCard />
      <h1 className="custom-font-mavan-pro font-bold text-lg ml-6 p-5 homeActiveColor">
        Business Unit Status
      </h1>

      <UnitsStatus />

      <h1 className="custom-font-mavan-pro font-bold text-lg ml-6  p-5 homeActiveColor">
        Business Units
      </h1>
      <UnitsNav />
      <Footer />
    </div>
  );
};

export default Home;
