import React, {useEffect, useContext } from "react";
import NavContext from "../../utils/useContext/NavContext";

const AddComment = ({editComment}) => {
  const {setComment,comment} = useContext(NavContext);

  useEffect(() => {
    setComment(editComment);
  }, [editComment, setComment]); 

  function handleChange(e){
    setComment(e.target.value)
  }
  
  return (
    <textarea
      draggable="false"
      
      name="postContent"
      className="p-3 border rounded-lg flex justify-center items-center  shadow border-gray-400 w-full h-28 font-medium text-sm custom-font-mavan-pro text-gray-600 resize-none focus:outline-none"
      rows={4}
      cols={40}
      value={comment}
      onChange={handleChange}
    />
  );
};

export default AddComment;
