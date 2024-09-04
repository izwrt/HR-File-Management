import React from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";

import ReminderCard from "../common/ReminderContainer";
import StatusCards from "../common/StatusCards";
import UnitsRedCards from "../common/UnitsRedCards";

const Home = () => {
  return (
    <div className="homeBgColor ">
      <Header />
      <h1 className="custom-font-mavan-pro font-bold text-lg ml-6 p-5  homeFontColor">
        Important Reminders
      </h1>
      <ReminderCard />
      <h1 className="custom-font-mavan-pro font-bold text-lg ml-6 p-5 homeFontColor">
        Business Unit Status
      </h1>

      <StatusCards />

      <h1 className="custom-font-mavan-pro font-bold text-lg ml-6  p-5 homeFontColor">
        Business Units
      </h1>
      <UnitsRedCards />
      <Footer />
    </div>
  );
};

export default Home;
