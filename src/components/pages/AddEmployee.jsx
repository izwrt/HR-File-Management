import { BsPersonCircle } from "react-icons/bs";
import InputField from "../common/InputField";

function AddEmployee() {
  return (
    <div className="ml-[220px]">
      <div className="font-bold text-xl mt-20 ml-6">Add Employee</div>
      <div className=" h-full shadow-lg rounded-lg my-4 mx-6 overflow-auto">
        <div className="flex items-start justify-between ">
          <div className="flex flex-col items-center p-10">
            <input
              type="file"
              className="p-10 opacity-0 cursor-pointer absolute"
              id="file-upload"
            />
            <BsPersonCircle className="h-24 w-24 mb-2" />
          </div>
          <div className="p-10 flex flex-col gap-5 items-center">
            <p className="font-color">Active Status</p>
            <label class="inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer" />
              <div class="relative w-16 h-8 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
        <div className="font-bold text-lg ml-10">Personal details</div>
        <div className="grid grid-cols-2 p-10 gap-10">
          <InputField fieldName="First Name" idName="firstName" type="text" />
          <div className="flex flex-col">
            <label className="font-bold">Date of Birth</label>
            <input
              type="date"
              className="mt-1.5 px-2 py-3 rounded-lg border border-black w-[100%]"
            />
          </div>
          <InputField fieldName="Last Name" idName="lastName" type="text" />
          <InputField
            fieldName="Personal Email"
            idName="personalEmail"
            type="text"
          />
          <InputField fieldName="Blood Group" idName="bloodGroup" type="text" />
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
          <InputField
            fieldName="Passport Size Photo"
            idName="passportSizePhoto"
            type="file"
          />
        </div>
        <div className="h-0.5 bg-gradient-to-l from-transparent via-black to-transparent mx-8"></div>
        <div className="font-bold text-lg ml-10 mt-6">Professional details</div>
        <div className="grid grid-cols-2 p-10 gap-10">
          <InputField fieldName="Resume" idName="resume" type="file" />
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
            <label className="font-bold">Business Units</label>
            <select className="mt-2 px-2 py-3 rounded-lg border border-black">
              <option value="option1">Option1</option>
              <option value="option2">Option2</option>
              <option value="option3">Option3</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="font-bold">Clients</label>
            <select className="mt-2 px-2 py-3 rounded-lg border border-black">
              <option value="option1">Option1</option>
              <option value="option2">Option2</option>
              <option value="option3">Option3</option>
            </select>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-start gap-5">
              <div className="flex flex-col">
                <label className="font-bold">Start Date</label>
                <input
                  type="date"
                  className="mt-1.5 px-2 py-3 rounded-lg border border-black w-[100%]"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-bold">End Date</label>
                <input
                  type="date"
                  className="mt-1.5 px-2 py-3 rounded-lg border border-black w-[100%]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-4 pb-10">
          <button className="px-8 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Save
          </button>
          <button className="px-8 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddEmployee;
