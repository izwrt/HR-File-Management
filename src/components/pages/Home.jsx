import React from "react";
import Footer from "../common/Footer";
import ReminderCard from "../common/ReminderContainer";
import SeeAll from "../common/SeeAll";
import UnitsNav from "../common/UnitsNav";
import UnitsStatus from "../common/UnitsStatus";

const Home = () => {
  return (
    <div className=" w-screen mt-16">
      <h1 className="custom-font-mavan-pro font-bold text-lg p-3 mt-4 pl-12 homeFontColor opacity-70">
        Important Reminders
      </h1>
      <ReminderCard />
      <div className="flex mt-4 py-3">
      <h1 className="custom-font-mavan-pro font-bold text-lg pl-12 homeFontColor  opacity-70 w-full">
        Business Unit Status
      </h1>
      <SeeAll />
      </div>
      <UnitsStatus />
      <h1 className="custom-font-mavan-pro font-bold text-lg pt-6 pl-12 homeFontColor">
        Business Units
      </h1>
      <SeeAll />

      <UnitsNav />
      <Footer />
    </div>
  );
};

export default Home;

// import React from "react";
// import Footer from "../common/Footer";

// import Header from "../common/Header";
// import ReminderCard from "../common/ReminderContainer";
// import UnitsStatus from "../common/UnitsStatus";
// import UnitsNav from "../common/UnitsNav";
// import SeeAll from "../common/SeeAll";

// const Home = () => {
//   return (
//     <div className="homeBgColor ">
//       <Header />
//       <h1 className="custom-font-mavan-pro font-bold text-lg ml-6 p-5  homeActiveColor ">
//         Important Reminders
//       </h1>
//       <SeeAll/>
//       <ReminderCard />

//       <h1 className="custom-font-mavan-pro font-bold text-lg ml-6 p-5 homeActiveColor">
//         Business Unit Status
//       </h1>
//       <SeeAll/>
//       <UnitsStatus />

//       <h1 className="custom-font-mavan-pro font-bold text-lg ml-6  p-5 homeActiveColor">
//         Business Units
//       </h1>
//       <SeeAll/>
//       <UnitsNav />
//            <Footer />
//     </div>
//   );
// };

// export default Home;
