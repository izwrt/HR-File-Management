import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import leftarrow from "../../assets/images/leftarrow.png";
import rightarrow from "../../assets/images/rightarrow.png";

const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    style={{
      position: "fixed",
      left: "20px",
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
      position: "fixed",
      right: "20px",
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
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:9000/employees")
      .then((response) => {
        console.log("API response:", response.data);
        setData(response.data.slice(0, 10));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  console.log(data[0]);

  const responsive = {
    desktop: {
      breakpoint: { max: 2000, min: 1800 },
      items: 4,
      slidesToSlide: 4
    },
    tablet: {
      breakpoint: { max: 1600, min: 464 },
      items: 3,
      slidesToSlide: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  return (
    <div className="w-full h-auto m-auto relative flex justify-center px-10 ">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Carousel
            className="w-full py-4 flex"
            responsive={responsive}
            customLeftArrow={<CustomPrevArrow />}
            customRightArrow={<CustomNextArrow />}
            showDots={true}
          >
            {data.map((d) => {
              const reminderCount = Object.keys(d.empReminder).length - 1;
              return (
                <div
                  key={d.id}
                  className="bg-customBlue h-[200px] w-[360px] text-black rounded-3xl px-8 mx-4 pt-4 mb-4  drop-shadow-xl"
                >
                  <div className="flex items-center justify-between gap-1">
                    <span className="custom-font-mavan-pro text-white text-2xl overflow-hidden whitespace-nowrap text-ellipsis">
                      {d.empReminder.reminder1}
                    </span>
                    {reminderCount > 0 && (
                      <div className="bg-white bg-opacity-20 rounded-full h-10 w-10 flex items-center justify-center">
                        <span className="text-white text-sm custom-font-mavan-pro">
                          {`+${reminderCount}`}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center w-full pt-4 pb-10">
                    <img
                      src={d.empImg}
                      alt={d.empName}
                      className="w-20 h-20 rounded-full object-cover mr-4"
                    />
                    <div className="text-xs custom-font-mavan-pro flex text-white font-semibold flex-col">
                      <p className="text-base font-semibold pb-2">
                        {d.empName}
                      </p>
                      <p className="text-sm pb-0.5 ">Department</p>
                      <p>{d.empDepartMent}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </>
      )}
    </div>
  );
};

export default Cards;
