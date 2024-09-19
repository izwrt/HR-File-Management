import React from 'react';
import { CiFilter, CiSearch } from "react-icons/ci";
import CountContainer from "../common/CountContainer";
import EmployeeBusinessLog from '../common/EmployeeBusinessLog';

export default function BusinessUnit() {
  return (
    <div className="h-full mt-16 ml-[220px]">
      <div className=" p-8 pr-12 flex gap-[12%] 2xl:h-[220px] ">
        <CountContainer smallText={`Active Employee`} largeNumber={`999`}/>
        <CountContainer smallText={`Inactive Employees`} largeNumber={`999`}/>
        <CountContainer smallText={`Relieved`} largeNumber={`999`}/>
      </div>

      <div className="bg-yellow-200 h-full pl-8 pr-12">
        <div className="bg-white rounded-lg px-5 py-4 flex flex-col gap-3">
          <div className=" flex justify-between items-center">
            <span className="text-black font-semibold text-base 2xl:text-base custom-font-mavan-pro opacity-80 ">Employees</span>
            <span className="flex gap-3 items-center">
              <label for="search" className=" border border-slate-200  flex w-[200px] items-center rounded-lg p-[2px] px-[6px] gap-1.5 textbox-color">
                <CiSearch className="size-5 stroke-1 h-fit opacity-40"/>
                <input type="text" name="search" className="w-full focus:outline-none textbox-color custom-font-mavan-pro opacity-80" placeholder="Search" />
              </label>
              <CiFilter className="size-7 opacity-40"/>
            </span>
          </div>
          
          <div>
            <EmployeeBusinessLog employeeName="Employee Name" client={"Client"} startDate={"Start Date"} endDate={"End Date"} status={"Status"} color="customColorBlue-lite"/>
          </div>
        </div>
      </div>
    </div>
  )
}
