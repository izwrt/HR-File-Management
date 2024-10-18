import React, { useState } from "react";
import BlueButton from "../BlueButton";
import Messages from "../../../assets/images/AboutPageImages/MessagesAbout";
import InterviewCards from "../InterviewCards";
import PhoneAbout from "../../../assets/images/AboutPageImages/PhoneAbout";
import EmergencyContact from "../../../assets/images/AboutPageImages/EmergencyContact";
import BloodGroup from "../../../assets/images/AboutPageImages/BloodGroup";
import TShirtSize from "../../../assets/images/AboutPageImages/TShirtSize";
import PermanentAddress from "../../../assets/images/AboutPageImages/PermanentAddress";
import CurrentAddress from "../../../assets/images/AboutPageImages/CurrentAddress";
import JobPosition from "../../../assets/images/AboutPageImages/JobPosition";
import JobDescription from "../../../assets/images/AboutPageImages/JobDescription";
import ReportingManager from "../../../assets/images/AboutPageImages/ReportingManager";
import TeamLead from "../../../assets/images/AboutPageImages/TeamLead";
import DateOfBirth from "../../../assets/images/AboutPageImages/DateOfBirth";
import BusinessUnits from "../../../assets/images/AboutPageImages/BusinessUnits";
import Resume from "../../../assets/images/AboutPageImages/Resume";
import CurrentClient from "../../../assets/images/AboutPageImages/CurrentClient";
import Edit from "../../../assets/images/AboutPageImages/Edit";

const About = () => {
  const [personalDetailsAction, setPersonalDetailsAction] = useState(false);
  const [professionalDetailsAction, setProfessionalDetailsAction] =
    useState(false);

  const handlePersonalDetails = () => {
    setPersonalDetailsAction((prev) => !prev);
  };

  const handleProfessionalDetails = () => {
    setProfessionalDetailsAction((prev) => !prev);
  };

  return (
    <div className="flex gap-10 w-full custom-font-mavan-pro">
      <div className="w-[50%] bg-white rounded-lg h-[50%]">
        <div className="p-6 font-semibold flex justify-between items-center h-[70px]">
          <div>Personal details</div>
          <div onClick={handlePersonalDetails}>
            {personalDetailsAction ? <BlueButton label="Save" /> : <Edit />}
            {/* <BlueButton label="Save" /> */}
          </div>
        </div>
        <form>
          <InterviewCards
            image={<Messages />}
            heading="Personal Email"
            personalDetailsAction={personalDetailsAction}
          />
          <InterviewCards
            heading="Phone Number"
            image={<PhoneAbout />}
            personalDetailsAction={personalDetailsAction}
          />
          <InterviewCards
            heading="Work Email"
            image={<Messages />}
            personalDetailsAction={personalDetailsAction}
          />
          <InterviewCards
            heading="Emergency Contact"
            image={<EmergencyContact />}
            personalDetailsAction={personalDetailsAction}
          />
          <InterviewCards
            heading="Blood Group"
            image={<BloodGroup />}
            personalDetailsAction={personalDetailsAction}
          />
          <InterviewCards
            heading="T-Shirt Size"
            image={<TShirtSize />}
            personalDetailsAction={personalDetailsAction}
          />
          <InterviewCards
            heading="Permanent Address"
            image={<PermanentAddress />}
            personalDetailsAction={personalDetailsAction}
          />
          <InterviewCards
            heading="Current Address"
            image={<CurrentAddress />}
            personalDetailsAction={personalDetailsAction}
          />
        </form>
      </div>
      <div className="w-[50%] bg-white rounded-lg h-[70%]">
        <div className="p-6 font-semibold flex justify-between items-center h-[70px]">
          <div>Professional Details</div>
          <div onClick={handleProfessionalDetails}>
            {professionalDetailsAction ? <BlueButton label="Save" /> : <Edit />}
          </div>
        </div>
        <form>
          <InterviewCards
            heading="Job Position"
            image={<JobPosition />}
            professionalDetailsAction={professionalDetailsAction}
          />
          <InterviewCards
            heading="Job Description"
            image={<JobDescription />}
            professionalDetailsAction={professionalDetailsAction}
          />
          <InterviewCards
            heading="Reporting Manager"
            image={<ReportingManager />}
            professionalDetailsAction={professionalDetailsAction}
          />
          <InterviewCards
            heading="Team Lead"
            image={<TeamLead />}
            professionalDetailsAction={professionalDetailsAction}
          />
          <InterviewCards
            heading="Date of Birth"
            image={<DateOfBirth />}
            professionalDetailsAction={professionalDetailsAction}
          />
          <InterviewCards
            heading="Business Units"
            image={<BusinessUnits />}
            professionalDetailsAction={professionalDetailsAction}
          />
          <InterviewCards
            heading="Resume"
            image={<Resume />}
            professionalDetailsAction={professionalDetailsAction}
          />
          <InterviewCards
            heading="Current Client"
            image={<CurrentClient />}
            professionalDetailsAction={professionalDetailsAction}
          />
        </form>
      </div>
    </div>
  );
};

export default About;
