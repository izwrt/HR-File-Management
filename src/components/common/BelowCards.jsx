import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import "./Belowcards.css";

const BelowCards = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/employees")
      .then((response) => {
        setData(response.data.slice(0, 10));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching employee data:", error);
        setLoading(false);
      });

    axios
      .get("http://localhost:5000/api/employees")
      .then((response) => {
        const fetchedImages = response.data
          .slice(0, 3)
          .map((employee) => employee.empImg);
        setImages(fetchedImages);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 800 },
      items: 4,
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

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    transitionDuration: 500,
  };

  return (
    <div className="w-[98%] px-4 h-auto py-2 bg-red-500 overflow-hidden absolute left-5 ">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Carousel
          responsive={responsive}
          infinite={settings.infinite}
          showDots={false}
          transitionDuration={settings.transitionDuration}
          slidesToShow={settings.slidesToShow}
          slidesToScroll={settings.slidesToScroll}
        >
          {data.map((d) => (
            <div
              key={d.id}
              className="bg-customBlue h-[170px] w-11/12 text-black rounded-xl  flex  flex-col justify-between"
            >
              {/* Card Content */}
              <div className=" pl-9 w-11 text-xs p-2 custom-font-mavan-pro text-white gap-2">
                <p className="text-3xl font-bold ">{d.empDepartMent}</p>
                <p className="text-xl font-semibold">Manager</p>
                <p>{d.empName}</p>
              </div>

              {/* Number of People and Overlapping Images */}
              <div className="flex items-center justify-end ">
                <div className="flex pr-5 pb-3 ">
                  {/* Overlapping Images Next to the "Length+" */}
                  <div className="relative w-[62px] h-[30px] flex items-center">
                    {images.map((imgSrc, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={imgSrc}
                        alt={`People ${imgIndex + 1}`}
                        className="w-[30px] h-[30px] rounded-full object-cover absolute"
                        style={{
                          left: `${imgIndex * 20}px`,
                          zIndex: images.length - imgIndex,
                        }}
                      />
                    ))}
                  </div>{" "}
                  <div className="bg-white rounded-full flex justify-center items-center z-20 h-[30px] w-[30px] text-black">
                    <p className="text-sm">{data.length}+</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default BelowCards;
