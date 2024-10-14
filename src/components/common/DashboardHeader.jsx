import React from "react";
import DashboardLogo from "../../assets/images/DashboardLogo";
import AddEmployeeLogo from "../../assets/images/AddEmployeeLogo";
import EmployeeStatusLogo from "../../assets/images/EmployeeStatusLogo";
import { NavLink } from "react-router-dom";

export default function DashboardHeader() {
  return (
    <ul className=" text-opacity-100 flex flex-col gap-2 py-6 px-2 items-start comobo-header w-full">
      <DashboardLogo />
      <AddEmployeeLogo />
      <EmployeeStatusLogo />
    </ul>
  );
}
