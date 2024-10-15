import React from "react";
import InterviewCards from "../common/InterviewCards";
import { useState } from "react";


const CandidateInterview = () => {
  const [schedule, setSchedule] = useState("28-12-2024");
  const [feedback, setFeedback] = useState("");
  const [email, setEmail] = useState("email.pdf");
  const [comments, setComments] = useState("");

  const handleSave = () => {
    console.log({ schedule, feedback, email, comments });
  };

  const handleCancel = () => {
    setSchedule("28-12-2024");
    setFeedback("");
    setEmail("email.pdf");
    setComments("");
  };

  return (
    <div className="mt-40 bg-pink-400 w-5/2 ml-60 mr-5 h-fit p-4 rounded-md"><h2 className="font-bold p-2 bg-yellow-400 w-fit">First Round</h2>
    <InterviewCards/>
      {/* <div className="form-group">
        <label>Schedule</label>
        <input
          type="text"
          onChange={(e) => setSchedule(e.target.value)}
        /> */}
        {/* <label>Feedback</label>
        <input
          type="text"
          placeholder="Add Feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        /> */}
      {/* </div> */}
      {/* <div className="form-group">
        <label>Email communication</label>
        <input type="text" value={email} readOnly />
        <button type="button">Add</button>
      </div>
      <div className="form-group">
        <textarea
          placeholder="Add Comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />
      </div>
      <div className="button-group">
        <button className="save-button" onClick={handleSave}>
          Save
        </button>
        <button className="cancel-button" onClick={handleCancel}>
          Cancel
        </button>
      </div> */}
    </div>
  );
};

export default CandidateInterview;
