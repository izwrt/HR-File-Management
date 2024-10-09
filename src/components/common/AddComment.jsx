import React from "react";

const AddComment = () => {
  return (
    <textarea
      name="postContent"
      defaultValue="Add Comments"
      className="p-3 border rounded-lg flex justify-center items-center  shadow border-gray-400 w-full h-28 font-medium  custom-font-mavan-pro  text-gray-400"
      rows={4}
      cols={40}
    />
  );
};

export default AddComment;
