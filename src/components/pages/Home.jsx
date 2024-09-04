import React from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import ReminderCard from "../common/ReminderCard";


const Home = () => {
  return (
    <div className="homeBgColor">
          <Header />



          <h1 className="custom-font-mavan-pro font-bold text-lg p-5 homeFontColor">
             Important Reminders
          </h1>
          <ReminderCard/>
          <h1 className="custom-font-mavan-pro font-bold text-lg p-5 homeFontColor">
            Business Unit Status
          </h1>
          <h1 className="custom-font-mavan-pro font-bold text-lg p-5 homeFontColor">
            Business Units
          </h1>
          <Footer />
    </div >
      

  );
};

export default Home;
