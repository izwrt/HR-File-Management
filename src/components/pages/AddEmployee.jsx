import { useRef } from "react";
import { MdUploadFile } from "react-icons/md";
import Setting_Employee from "../../assets/images/Setting_Employee";
import InputField from "../common/InputField";
import BlueButton from "../common/BlueButton";

function AddEmployee() {
  const inputRef = useRef(null);
  const photoRef = useRef(null);
  const resumeRef = useRef(null);

  const callRef = () => {
    inputRef.current.click();
  };

  const callInputElement = () => {
    photoRef.current.click();
  };

  const callResumeInput = () => {
    resumeRef.current.click();
  };

  return (
    <div className="mt-16 ml-[220px] 2xl:ml-[230px] md:ml-0 h-fit pl-8 pr-12 md:pl-5 md:pr-6 gap-8 custom-font-mavan-pro">
      <div className="my-9">
        <div className="font-bold text-base">Add Employee</div>
        <div className="rounded-lg bg-white shadow-sm border-solid border border-slate-100 shadow-gray-20 mt-2 overflow-auto">
          <div className="flex items-start justify-between p-8 ">
            <input type="file" className="hidden" ref={inputRef} />
            <div
              className="flex items-center justify-center cursor-pointer relative "
              onClick={callRef}
            >
              <Setting_Employee />
            </div>
            <div className="flex flex-col items-center gap-5">
              <p className="font-color">Active Status</p>
              <label className="inline-flex items-center cursor-pointer">
                {<input type="checkbox" value="" className="sr-only peer" />}
                <div
                  className={`relative w-14 h-8 bg-gray-200 peer-focus:outline-none   rounded-full peer dark:bg-gray-200 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white aft
                    er:content-[''] after:absolute after:top-[2px] after:-left-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all dark:border-gray-600 peer-checked:bg-slate-300`}
                ></div>
              </label>
            </div>
          </div>
          <div className="font-semibold text-lg pl-8">Personal details</div>
          <div className="grid grid-cols-2 2xl:grid-cols-3 p-8 gap-y-10 gap-x-14">
            <InputField fieldName="First Name" idName="firstName" type="text" />
            <div className="flex flex-col">
              <label className="font-normal">Date of Birth</label>
              <input
                type="date"
                className="mt-2 px-2 py-3  rounded-lg border-2 border-gray-500 "
                placeholder="Select a Date"
              />
            </div>
            <InputField fieldName="Last Name" idName="lastName" type="text" />
            <InputField
              fieldName="Personal Email"
              idName="personalEmail"
              type="text"
            />
            <InputField
              fieldName="Blood Group"
              idName="bloodGroup"
              type="text"
            />
            <InputField
              fieldName="T-Shirt Size"
              idName="tShirtSize"
              type="text"
            />
            <InputField
              fieldName="Permanent Address"
              idName="permanentAddress"
              type="text"
            />
            <InputField
              fieldName="Current Address"
              idName="currentAddress"
              type="text"
            />
            <InputField
              fieldName="Phone Number"
              idName="phoneNumber"
              type="text"
            />
            <InputField
              fieldName="Emergency Number"
              idName="emergencyNumber"
              type="text"
            />
            <InputField
              fieldName="Aadhar Number"
              idName="aadharNumber"
              type="text"
            />
            <InputField
              fieldName="Pan Card Number"
              idName="panCardNumber"
              type="text"
            />
            <InputField
              fieldName="Passport Number"
              idName="passportNumber"
              type="text"
            />
            <div className="flex flex-col">
              <label className="font-normal">Passport Size Photo</label>
              <div
                className="mt-2 flex items-center justify-center cursor-pointer px-2 py-3 rounded-lg border-2 border-gray-500"
                onClick={callInputElement}
              >
                <MdUploadFile size="24" color="gray" />
                <span className="font-normal text-gray-500 pl-1">
                  Upload Photo
                </span>
                <input
                  type="file"
                  id="passportSizePhoto"
                  className="hidden"
                  ref={photoRef}
                />
              </div>
            </div>
          </div>

          <div className="h-0.5 bg-gradient-to-l from-transparent via-black to-transparent mx-8"></div>
          <div className="font-bold text-lg ml-8 mt-6">
            Professional details
          </div>
          <div className="grid grid-cols-2 2xl:grid-cols-3 p-8 gap-10">
            <div className="flex flex-col">
              <label className="font-normal">Upload Resume</label>
              <div
                className="mt-2 flex items-center justify-center cursor-pointer px-2 py-3 rounded-lg border-2 border-gray-500"
                onClick={callResumeInput}
              >
                <MdUploadFile size="24" color="gray" />
                <span className="font-normal text-gray-500 pl-1">
                  Upload Resume
                </span>
                <input
                  type="file"
                  id="resumePhoto"
                  className="hidden"
                  ref={resumeRef}
                />
              </div>
            </div>
            <InputField
              fieldName="Job Position"
              idName="jobPosition"
              type="text"
            />
            <InputField
              fieldName="Reporting Manager"
              idName="reportingManager"
              type="text"
            />
            <InputField fieldName="Team Lead" idName="teamLead" type="text" />
            <InputField fieldName="Work Email" idName="workEmail" type="text" />
            <div className="flex flex-col">
              <label className="font-normal">Business Units</label>
              <select className=" mt-2 px-2 py-3.5 rounded-lg border-2 border-gray-500">
                <option value="option1">Option1</option>
                <option value="option2">Option2</option>
                <option value="option3">Option3</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="font-normal">Clients</label>
              <select className="mt-2 px-2 py-3.5 rounded-lg border-2 border-gray-500">
                <option value="option1">Option1</option>
                <option value="option2">Option2</option>
                <option value="option3">Option3</option>
              </select>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-start gap-5">
                <div className="flex flex-col">
                  <label className="font-normal">Start Date</label>
                  <input
                    type="date"
                    className="mt-2 px-2 py-2.5 rounded-lg border-2 border-gray-500 w-[100%]"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="font-normal">End Date</label>
                  <input
                    type="date"
                    className="mt-2 px-2 py-2.5 rounded-lg border-2 border-gray-500 w-[100%]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center gap-10 pb-10">
            <BlueButton label={"Save"} />
            <BlueButton label={"Cancel"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddEmployee;
