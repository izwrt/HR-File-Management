import { useState } from "react";

function NotificationComponent({
  employeeName,
  department,
  documentsToBeUploaded,
  timePosted,
}) {
  return (
    <>
      <div className="customColorBlue-lite text-black w-full h-11 mt-4 grid grid-cols-[auto_1fr_1fr_1fr_1fr] items-center justify-start opacity-80">
        <input
          type="checkbox"
          className="w-6 h-6 mx-6 appearance-none checked:bg-green-500 border-2 border-gray-400 rounded-lg"
        />
        <div>{employeeName}</div>
        <div>{department}</div>
        <div>{documentsToBeUploaded}</div>
        <div className="col-span-1 justify-self-center">{timePosted}</div>
      </div>
    </>
  );
}

export default NotificationComponent;
