import { NavLink } from "react-router-dom";

function EmployeeStatusLogo() {
  return (
    <NavLink
      to="/sdaks"
      className={({ isActive }) =>
        ` ${
          isActive
            ? `text-black bg-selectedTab w-full rounded-lg flex gap-2 px-4 py-3.5 fill-black items-center transition-colors bg-opacity-100 duration-500`
            : `text-white flex gap-2 px-4 py-3.5 w-full rounded-lg fill-white hover:fill-white hover:text-white hover:opacity-50 items-center transition-colors duration-500 bg-selectedTab bg-opacity-0`
        }`
      }
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
    </NavLink>
  );
}

export default EmployeeStatusLogo;
