import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import "./Belowcards.css";

const BelowCards = () => {
  const [data, setData] = useState([]); // State to store API data
  const [loading, setLoading] = useState(true); // State for loading

  // Fetch data from API on component mount
  useEffect(() => {
    axios
      .get("http://localhost:8000/employees") // Corrected API URL
      .then((response) => {
        setData(response.data.slice(0, 10)); // Store the first 10 items
        setLoading(false); // Set loading to false
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4, // Show 4 items on large screens
    },
    desktop: {
      breakpoint: { max: 3000, min: 800 },
      items: 4, // Show 4 items on desktop
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2, // Show 2 items on tablet
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1, // Show 1 item on mobile
    },
  };

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4, // Show 4 slides (cards)
    slidesToScroll: 1,
    transitionDuration: 500,
  };

  return (
    <div className="w-11/12 h-auto m-auto">
      <div>
        {loading ? (
          <div>Loading...</div> // Show loading while fetching data
        ) : (
          <Carousel
            responsive={responsive}
            infinite={settings.infinite}
            showDots={false} // Disable dots unless you want them
            transitionDuration={settings.transitionDuration}
            slidesToShow={settings.slidesToShow}
            slidesToScroll={settings.slidesToScroll}
          >
            {data.map((d) => (
              <div
                key={d.id}
                className="bg-customBlue h-[150px] text-black rounded-xl p-2 flex mx-2 flex-col justify-between"
              >
                <div className="w-[50px] h-[50px] flex items-center justify-center p-2">
                  <img
                    src={d.empImg}
                    alt={d.empName}
                    className="w-[30px] h-[30px] object-cover bg-red-600 rounded-full"
                  />
                </div>
                <div className="p-2 text-xs custom-font-mavan-pro text-white font-semibold gap-2">
                  <p className="text-sm">{d.empName}</p>
                  <p className="text-sm">Department</p>
                  <p>{d.empDepartMent}</p>
                </div>
              </div>
            ))}
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default BelowCards;

// import React, { useState, useEffect } from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import axios from "axios";

// const BelowCards = () => {
//   const [data, setData] = useState([]); // State to store API data
//   const [loading, setLoading] = useState(true); // State for loading

//   // Fetch data from API on component mount
//   useEffect(() => {
//     axios
//       .get("http://localhost:8000/employees")
//       .then((response) => {
//         setData(response.data.slice(0, 10)); // Store the first 10 items
//         setLoading(false); // Set loading to false
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//         setLoading(false);
//       });
//   }, []);

//   const responsive = {
//     superLargeDesktop: {
//       breakpoint: { max: 4000, min: 1024 },
//       items: 4,
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 800 },
//       items: 4, // Show 4 items on desktop
//     },
//     tablet: {
//       breakpoint: { max: 800, min: 464 },
//       items: 2, // Show 2 items on tablet
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1, // Show 1 item on mobile
//     },
//   };

//   return (
//     <div className="w-11/12 h-auto m-auto relative">
//       <div>
//         {loading ? (
//           <div>Loading...</div> // Show loading while fetching data
//         ) : (
//           <Carousel
//             responsive={responsive}
//             infinite={false}
//             showDots={false}
//             transitionDuration={500}
//           >
//             {data.map((d) => (
//               <div
//                 key={d.id}
//                 className="bg-customBlue h-[150px] text-black rounded-xl p-4 flex mx-2 flex-col justify-between"
//               >
//                 {/* Image Container */}
//                 <div className="w-[50px] h-[50px] flex items-center justify-center p-2">
//                   <img
//                     src={d.empImg}
//                     alt={d.empName}
//                     className="w-[40px] h-[40px] object-cover bg-gray-200 rounded-full"
//                   />
//                 </div>
//                 {/* Employee Info */}
//                 <div className="p-2 text-xs custom-font-mavan-pro text-white font-semibold gap-2">
//                   <p className="text-sm">{d.empName}</p>
//                   <p className="text-sm">{d.empDepartMent || "Department"}</p>
//                 </div>
//               </div>
//             ))}
//           </Carousel>
//         )}
//       </div>
//     </div>
//   );
// };
// export default BelowCards;
