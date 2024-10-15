import { useState } from "react";
import { NavLink } from "react-router-dom";

function EmployeeStatusLogo() {
  const [active, setActive] = useState(false);

  function handleClick() {
    setActive((prev) => !prev);
  }

  return (
    <>
      <div
        onClick={handleClick}
        className={` ${
          active
            ? `text-black bg-selectedTab w-full flex flex-col rounded-lg gap-2 px-4 py-3.5 fill-black  bg-opacity-100 pb-4 duration-300 cursor-pointer`
            : ` px-4 py-3.5 w-full rounded-lg  items-center transition-colors duration-500 bg-selectedTab bg-opacity-0 cursor-pointer justify-start`
        }`}
      >
        <div
          className={` ${
            active
              ? `text-black fill-black flex gap-2 w-full`
              : `flex gap-2 text-white fill-white hover:fill-white hover:text-white hover:opacity-50`
          }`}
        >
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 16H6V8H2V16ZM8 16H12V2H8V16ZM14 16H18V10H14V16ZM0 18V6H6V0H14V8H20V18H0Z" />
          </svg>
          <span>Employee Status</span>
        </div>

        {active && (
          <>
            <NavLink
              to="/addEmployee"
              className=" font-semibold text-sm opacity-50 pl-[29px]"
            >
              Invenger Solution
            </NavLink>
            <div className=" font-semibold text-sm opacity-50 pl-[29px]">
              Invenger Technology
            </div>
            <div className="font-semibold text-sm opacity-50 pl-[29px]">
              Instarack
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default EmployeeStatusLogo;
