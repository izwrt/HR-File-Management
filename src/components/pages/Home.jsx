import React from "react";
import Footer from "../common/Footer";
import Cards from "../common/Cards";

import ReminderCard from "../common/ReminderContainer";

const Home = () => {
  return (
    <div className="bg-red-300 w-screen mt-16">
      <Cards />
      <h1 className="custom-font-mavan-pro font-bold text-lg p-5 homeFontColor">
        Important Reminders
      </h1>
      <ReminderCard />
      <h1 className="custom-font-mavan-pro font-bold text-lg p-5 homeFontColor">
        Business Unit Status
      </h1>
      <h1 className="custom-font-mavan-pro font-bold text-lg p-5 homeFontColor">
        Business Units
      </h1>
      <Footer />
    </div>
  );
};

export default Home;
