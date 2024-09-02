import React from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="homeBgColor ">
        <h1 className="custom-font-mavan-pro font-bold text-lg p-5 homeFontColor">
          Important Reminders
        </h1>
        <div className="bg-white w-fullscreen  p-5 mr-10 h-80 ml-5 rounded-3xl drop-shadow ">
          CARDS
        </div>
        <h1 className="custom-font-mavan-pro font-bold text-lg p-5 homeFontColor">
          Business Unit Status
        </h1>
        <h1 className="custom-font-mavan-pro font-bold text-lg p-5 homeFontColor">
          Business Units
        </h1>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
