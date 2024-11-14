import React, { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import BusinessUnitHomePageCards from "./BusinessUnitHomePageCards";

const businessUnits = [
  {
    id: "b1",
    name: "Cloud Manager",
    manager: "John Doe",
    description: "Lead the team in managing cloud infrastructure and services.",
    employees: [
      {
        name: "Jane Smith",
        photo: "https://randomuser.me/api/portraits/women/50.jpg",
      },
      {
        name: "Bob Johnson",
        photo: "https://randomuser.me/api/portraits/men/30.jpg",
      },
      {
        name: "Alice Williams",
        photo: "https://randomuser.me/api/portraits/women/35.jpg",
      },
    ],
  },
  {
    id: "b2",
    name: "Data Analytics",
    manager: "Sarah Lee",
    description: "Leading the analytics team to process and analyze big data.",
    employees: [
      {
        name: "Tom Green",
        photo: "https://randomuser.me/api/portraits/men/40.jpg",
      },
      {
        name: "Mia Brown",
        photo: "https://randomuser.me/api/portraits/women/20.jpg",
      },
      {
        name: "David White",
        photo: "https://randomuser.me/api/portraits/men/22.jpg",
      },
    ],
  },
  {
    id: "b3",
    name: "Marketing",
    manager: "Sophie Turner",
    description: "Oversees the companys marketing strategy and brand growth.",
    employees: [
      {
        name: "James Black",
        photo: "https://randomuser.me/api/portraits/men/50.jpg",
      },
      {
        name: "Laura Green",
        photo: "https://randomuser.me/api/portraits/women/25.jpg",
      },
      {
        name: "Chris Blue",
        photo: "https://randomuser.me/api/portraits/men/35.jpg",
      },
    ],
  },
  {
    id: "b4",
    name: "Product Development",
    manager: "Emily Clark",
    description:
      "Responsible for product design, prototyping, and development.",
    employees: [
      {
        name: "Anna Scott",
        photo: "https://randomuser.me/api/portraits/women/60.jpg",
      },
      {
        name: "Luke Walker",
        photo: "https://randomuser.me/api/portraits/men/33.jpg",
      },
      {
        name: "Olivia King",
        photo: "https://randomuser.me/api/portraits/women/45.jpg",
      },
    ],
  },
  {
    id: "b5",
    name: "Customer Support",
    manager: "Michael Brown",
    description:
      "Handles customer inquiries and support issues across all products.",
    employees: [
      {
        name: "Sophie Young",
        photo: "https://randomuser.me/api/portraits/women/10.jpg",
      },
      {
        name: "Ryan Reed",
        photo: "https://randomuser.me/api/portraits/men/42.jpg",
      },
      {
        name: "Eva Cook",
        photo: "https://randomuser.me/api/portraits/women/39.jpg",
      },
    ],
  },
  {
    id: "b6",
    name: "Human Resources",
    manager: "Olivia Johnson",
    description: "Manages recruitment, onboarding, and employee welfare.",
    employees: [
      {
        name: "Henry Wilson",
        photo: "https://randomuser.me/api/portraits/men/52.jpg",
      },
      {
        name: "Grace Lee",
        photo: "https://randomuser.me/api/portraits/women/47.jpg",
      },
      {
        name: "Samuel Harris",
        photo: "https://randomuser.me/api/portraits/men/26.jpg",
      },
    ],
  },
  {
    id: "b7",
    name: "Finance",
    manager: "Robert Jones",
    description: "Oversees budgeting, forecasting, and financial reporting.",
    employees: [
      {
        name: "Daniel Edwards",
        photo: "https://randomuser.me/api/portraits/men/37.jpg",
      },
      {
        name: "Laura Collins",
        photo: "https://randomuser.me/api/portraits/women/30.jpg",
      },
      {
        name: "Benjamin Stewart",
        photo: "https://randomuser.me/api/portraits/men/48.jpg",
      },
    ],
  },
  {
    id: "b8",
    name: "Legal",
    manager: "Patricia Robinson",
    description:
      "Ensures compliance with legal regulations and manages contracts.",
    employees: [
      {
        name: "Charles Evans",
        photo: "https://randomuser.me/api/portraits/men/28.jpg",
      },
      {
        name: "Hannah Baker",
        photo: "https://randomuser.me/api/portraits/women/36.jpg",
      },
      {
        name: "Ethan Wright",
        photo: "https://randomuser.me/api/portraits/men/20.jpg",
      },
    ],
  },
];

const UnitsNav = () => {
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [current, setCurrent] = useState(0);
  const length = businessUnits.length;

  const isPrevDisabled = current <= 0;
  const isNextDisabled = current >= length - 3;

  const nextSlide = () => {
    if (current < length - 3) {
      setCurrent((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (current > 0) {
      setCurrent((prev) => prev - 1);
    }
  };

  const businessUnitsStatus = [
    { name: "Invenger Technologies", active: 120, inactive: 10 },
    { name: "Invenger Solutions", active: 90, inactive: 5 },
    { name: "Instarak", active: 150, inactive: 12 },
  ];

  const handleCardClick = (index) => {
    setSelectedUnit(index);
  };

  return (
    <>
      <div className="flex justify-start gap-5 pl-12">
        {businessUnitsStatus.map((unit, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(index)}
            className={`w-40 h-9 rounded-3xl drop-shadow flex items-center justify-center cursor-pointer ${
              selectedUnit === index
                ? "homeUnitNavSelected homeUnitsFont"
                : "homeUnitNavUnSelected homeUnitsFont"
            }`}
          >
            <h2 className="font-normal text-sm">{unit.name}</h2>
          </div>
        ))}
      </div>
      <div className="flex flex-row relative justify-center items-center">
        <div className="bg-slate-600 h-8 left-7 absolute z-20">
          <FaChevronLeft
            className={`cursor-pointer ${
              isPrevDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={prevSlide}
            size={35}
          />
        </div>

        <div className=" overflow-hidden h-full flex items-center justify-start mt-6 mx-12">
          <div className="flex">
            <div
              className="carousel-container"
              style={{
                transform: `translateX(-${current * 11.5}%)`,
                width: `${(length / 3) * 100}%`,
              }}
            >
              {businessUnits.map((unit) => (
                <BusinessUnitHomePageCards key={unit.id} unit={unit} />
              ))}
            </div>
          </div>
        </div>

        <div className="bg-slate-600 h-8 absolute right-9">
          <FaChevronRight
            className={`w-7 cursor-pointer ${
              isNextDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={nextSlide}
            size={35}
          />
        </div>
      </div>
    </>
  );
};

export default UnitsNav;
