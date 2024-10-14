import { NavLink } from "react-router-dom";

function DashboardLogo() {
  return (
    <NavLink
      to="/dashboard"
      className={({ isActive }) =>
        ` ${
          isActive
            ? `text-black bg-selectedTab w-full rounded-lg flex gap-2 px-4 py-3.5 fill-black items-center transition-colors bg-opacity-100 duration-500`
            : `text-white flex gap-2 px-4 py-3.5 w-full rounded-lg fill-white hover:fill-white hover:text-white hover:opacity-50 items-center transition-colors duration-500 bg-selectedTab bg-opacity-0`
        }`
      }
    >
      <svg
        width="24"
        height="24"
        viewBox="3 0 24 24"
        fill=""
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_1575_417)">
          <path d="M3 11V3H11V11H3ZM3 21V13H11V21H3ZM13 11V3H21V11H13ZM13 21V13H21V21H13ZM5 9H9V5H5V9ZM15 9H19V5H15V9ZM15 19H19V15H15V19ZM5 19H9V15H5V19Z" />
        </g>
        <defs>
          <clipPath id="clip0_1575_417">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <span>Dashboard</span>
    </NavLink>
  );
}

export default DashboardLogo;
