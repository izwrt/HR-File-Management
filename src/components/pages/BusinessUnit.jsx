import React,{ useState, useMemo } from 'react';
import { CiFilter, CiSearch } from "react-icons/ci";
import apiFecthEmployees from '../../../api/apiFecthEmployees';
import CountContainer from "../common/CountContainer";
import EmployeeBusinessLog from '../common/EmployeeBusinessLog';

export default function BusinessUnit() {
  const employeeDetails = apiFecthEmployees();
  return (
    <div className="h-full mt-16 ml-[220px]">
      <div className=" p-8 pr-12 flex gap-[12%] 2xl:h-[220px] ">
        <CountContainer smallText={`Active Employee`} largeNumber={`999`}/>
        <CountContainer smallText={`Inactive Employees`} largeNumber={`999`}/>
        <CountContainer smallText={`Relieved`} largeNumber={`999`}/>
      </div>

      <div className="xl:h-[85%] 2xl:h-[44rem] pl-8 pr-12 pb-5">
        <div className="bg-white rounded-lg px-5 py-4 flex flex-col gap-3 h-full shadow-sm border-solid border border-slate-100 shadow-gray-200  ">
          <div className=" flex justify-between items-center">
            <span className="text-black font-semibold text-base 2xl:text-base custom-font-mavan-pro opacity-80 ">Employees</span>
            <span className="flex gap-1 items-center">
              <label htmlFor="search" className=" border border-slate-200  flex w-[200px] items-center rounded-lg p-[2px] px-[6px] gap-1.5 textbox-color">
                <CiSearch className="size-5 stroke-1 h-fit opacity-40"/>
                <input type="text" name="search" className="w-full focus:outline-none textbox-color custom-font-mavan-pro opacity-80" placeholder="Search" />
              </label>
              <CiFilter className="size-7 opacity-40"/>
            </span>
          </div>
          
          <div className="flex flex-col gap-3 h-fit overflow-auto overflow">
            <div className="sticky top-0 z-10 backdrop-blur-sm">
                <EmployeeBusinessLog
                  employeeName="Employee Name"
                  client={"Client"}
                  startDate={"Start Date"}
                  endDate={"End Date"}
                  status={"Status"}
                  action={"Action"}
                  color="customColorBlue-lite"
                  fontWeight={"font-semibold"}
                  id={"Employee Id"}
                />
              </div>

            {employeeDetails.map((emp) => {
              return(
                <EmployeeBusinessLog
                  key={emp.id}
                  employeeName={emp.name} 
                  client={emp.client}
                  startDate={emp.startDate}
                  endDate={emp.endDate}
                  status={emp.status}
                  action={"Action"}
                  color="textbox-color"
                  fontWeight={"font-medium"}
                  id={emp.empid}
                />
              )
            })}

          </div>
        </div>
      </div>
    </div>
  )
}
