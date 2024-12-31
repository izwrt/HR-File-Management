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
      left: "30px",
      background: "",
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
      right: "30px",
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

  const responsive = {
    desktop: {
      breakpoint: { max: 2000, min: 1800 },
      items: 4,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 1600, min: 464 },
      items: 3,
      slidesToSlide: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="w-full h-auto m-auto relative flex justify-center">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Carousel
            className="py-4 flex w-[92%]"
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
                  className="bg-customBlue h-[180px] w-[308px] rounded-3xl px-5 ml-7 pt-4 mb-4  drop-shadow-xl text-white scale-card"
                >
                  <div className="flex  justify-between ">
                    <div className="flex flex-col custom-font-mavan-pro text-2xl font-semibold  w-[160px]  gap-2">
                      {d.empReminder.reminder1}
                      <p className="text-lg font-semibold opactiy-80">
                        {d.empName}
                      </p>

                      {reminderCount > 0 ? (
                        <div className="bg-black bg-opacity-20 rounded-full w-fit px-4 p-2 flex items-center justify-center">
                          <span className="text-white text-xs custom-font-mavan-pro font-semibold cursor-pointer">
                            {`Pedding +${reminderCount}`}
                          </span>
                        </div>
                      ) : (
                        <div className="bg-black bg-opacity-20 rounded-full w-fit px-4 p-2 flex items-center justify-center">
                          <span className="text-white text-xs custom-font-mavan-pro font-semibold cursor-pointer">
                            {`Upload Now`}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className=" flex justify-center items-center flex-col">
                      <img
                        src={d.empImg}
                        alt={d.empName}
                        className="w-20 h-20 rounded-full object-cover border-4 shadow-lg"
                      />
                      <p className="text-base font-semibold ">{d.empNo}</p>

                      <p className="text-base font-semibold opacity-70">
                        {d.empDepartMent}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-end w-full  gap-4 h-fit flex-row text-white ">
                    <div className="text-xs custom-font-mavan-pro flex  font-semibold flex-col justify-center  p-2 "></div>
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
