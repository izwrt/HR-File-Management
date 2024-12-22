import React from "react";
import Footer from "../common/Footer";
import ReminderCard from "../common/ReminderContainer";
import SeeAll from "../common/SeeAll";
import UnitsNav from "../common/UnitsNav";
import UnitsStatus from "../common/UnitsStatus";
import CustomReducerContext from "../../utils/useContext/CustomReducerContext";
import { useContext } from "react";

const Home = () => {
  const { state, dispatch } = useContext(CustomReducerContext);

  console.log(state);
  return (
    <div className=" w-screen mt-16">
      <div className="2xl:px-32">
        <h1 className="custom-font-mavan-pro font-bold text-lg p-3 mt-3 pl-12 homeFontColor opacity-70">
          Important Reminders
        </h1>
        <ReminderCard />
        <div className="flex mt-10 py-3">
        <h1 className="custom-font-mavan-pro font-bold text-lg pl-12 homeFontColor  opacity-70 w-full">
          Business Unit Status
        </h1>
        <SeeAll />
        </div>
        <UnitsStatus />
        <div className="flex mt-10 py-3">
        <h1 className="custom-font-mavan-pro font-bold text-lg pl-12 homeFontColor opacity-70 w-full">
          Business Units
        </h1>

        <SeeAll />
        </div>
        <UnitsNav />
      </div>

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
