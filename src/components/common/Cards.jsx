//

import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios"; // Import Axios
import rightarrow from "../../assets/images/rightarrow.png";
import leftarrow from "../../assets/images/leftarrow.png";

const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    style={{
      position: "absolute",
      left: "10px",
      top: "50%",
      transform: "translateY(-50%)",
      background: "transparent",
      border: "none",
      zIndex: 10,
    }}
  >
    <img
      src={leftarrow}
      alt="Previous"
      style={{ width: "30px", height: "30px" }}
    />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    style={{
      position: "absolute",
      right: "10px",
      top: "50%",
      transform: "translateY(-50%)",
      background: "transparent",
      border: "none",
      zIndex: 10,
    }}
  >
    <img
      src={rightarrow}
      alt="Next"
      style={{ width: "30px", height: "30px" }}
    />
  </button>
);

const Cards = () => {
  const [data, setData] = useState([]); // State to store API data
  const [loading, setLoading] = useState(true);

  // Fetch data from API on component mount
  useEffect(() => {
    axios
      .get("http://localhost:8000/employees") // Ensure this URL is correct
      .then((response) => {
        console.log("API response:", response.data); // Debugging: log the API response
        setData(response.data.slice(0, 10)); // Store the first 10 items
        setLoading(false); // Set loading to false
      })
      .catch((error) => {
        console.error("Error fetching data:", error); // Debugging: log any errors
        setLoading(false);
      });
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="w-3/4 h-auto m-auto relative">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Carousel
          responsive={responsive}
          customLeftArrow={<CustomPrevArrow />}
          customRightArrow={<CustomNextArrow />}
        >
          {data.map((d) => (
            <div
              key={d.id}
              className="bg-customBlue h-[150px] text-black rounded-xl p-2 flex mx-2 flex-col justify-between"
            >
              <div className="text-white text-[18px] custom-font-mavan-pro text-center font-bold p-2">
                {d.empReminder}
              </div>
              <div className="flex items-center pb-10 gap-2">
                <div className="w-[60px] h-[50px] flex items-center justify-center p-2">
                  <img
                    src={d.empImg}
                    alt={d.empName}
                    className="w-[85px] h-[50px] object-cover rounded-full"
                  />
                </div>
                <div className="text-xs custom-font-mavan-pro flex items-center text-white font-semibold flex-col">
                  <p className="text-sm">{d.empName}</p>
                  <p className="text-sm">Department</p>
                  <p>{d.empDepartMent}</p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default Cards;
